// src/components/NodeNetwork.jsx
import React, { useEffect, useRef, useState } from "react";

const NodeNetwork = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Create initial nodes and connections
  const createNetwork = () => {
    const nodes = [];
    const connections = [];

    // Create nodes with positions
    for (let i = 0; i < 100; i++) {
      nodes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 3,
        baseOpacity: 1 + Math.random() * 0.8,
        active: false,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Create connections between nearby nodes
    nodes.forEach((node1, i) => {
      nodes.slice(i + 1).forEach((node2, j) => {
        const dx = node1.x - node2.x;
        const dy = node1.y - node2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          // Connect nodes within 25% distance
          connections.push({
            id: `${i}-${j}`,
            x1: node1.x,
            y1: node1.y,
            x2: node2.x,
            y2: node2.y,
            opacity: 0.1,
          });
        }
      });
    });

    return { nodes, connections };
  };

  const [network, setNetwork] = useState(() => createNetwork());

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Animate nodes and connections
  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setNetwork((prev) => {
        const updatedNodes = prev.nodes.map((node) => {
          // Calculate distance from mouse
          const dx = mousePos.x - node.x;
          const dy = mousePos.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Calculate activation based on mouse proximity
          const activation = Math.max(0, 1 - distance / 15); // 15% activation radius

          // Update pulse
          const newPulse = (node.pulse + 0.02) % (Math.PI * 2);

          return {
            ...node,
            pulse: newPulse,
            active: activation > 0.1,
            currentOpacity:
              activation > 0.1
                ? Math.min(1, node.baseOpacity + activation * 0.7)
                : node.baseOpacity * (0.8 + Math.sin(newPulse) * 0.2),
          };
        });

        // Update connections based on node states
        const updatedConnections = prev.connections.map((conn) => {
          const node1 = updatedNodes.find(
            (n) =>
              Math.abs(n.x - conn.x1) < 0.1 && Math.abs(n.y - conn.y1) < 0.1
          );
          const node2 = updatedNodes.find(
            (n) =>
              Math.abs(n.x - conn.x2) < 0.1 && Math.abs(n.y - conn.y2) < 0.1
          );

          let opacity = 0.08; // Base opacity

          if (node1?.active || node2?.active) {
            opacity = 0.3;
          }
          if (node1?.active && node2?.active) {
            opacity = 0.6;
          }

          return { ...conn, opacity };
        });

        return { nodes: updatedNodes, connections: updatedConnections };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  // Vertical fade effect - more visible at top, fades toward middle
  const getVerticalOpacity = (y) => {
    // More visible at top (y = 0), fade out towards middle (y = 50)
    return Math.max(0.2, 0.8 - y / 50);
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        background:
          "radial-gradient(ellipse at top, transparent 0%, rgba(0,0,0,0.7) 70%)",
      }}
    >
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient
            id="connectionGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(96, 165, 250, 0.3)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.3)" />
          </linearGradient>
          <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(96, 165, 250, 0.8)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.8)" />
          </linearGradient>
        </defs>

        {network.connections.map((conn) => {
          const verticalOpacity = getVerticalOpacity((conn.y1 + conn.y2) / 2);
          const opacity = conn.opacity * verticalOpacity;

          return (
            <line
              key={conn.id}
              x1={`${conn.x1}%`}
              y1={`${conn.y1}%`}
              x2={`${conn.x2}%`}
              y2={`${conn.y2}%`}
              stroke={
                conn.opacity > 0.2
                  ? "url(#activeGradient)"
                  : "url(#connectionGradient)"
              }
              strokeWidth={conn.opacity > 0.2 ? "1" : "0.5"}
              strokeOpacity={opacity}
              className="transition-all duration-200"
            />
          );
        })}
      </svg>

      {/* Nodes */}
      <div className="absolute inset-0">
        {network.nodes.map((node) => {
          const verticalOpacity = getVerticalOpacity(node.y);
          const glowSize = node.active ? 8 : 4;
          const glowOpacity = node.active ? 0.4 : 0.1;
          const nodeOpacity = node.currentOpacity * verticalOpacity;

          return (
            <div
              key={node.id}
              className="absolute rounded-full transition-all duration-200"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: `${node.size}px`,
                height: `${node.size}px`,
                transform: "translate(-50%, -50%)",
                opacity: nodeOpacity,
                background: node.active
                  ? "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(96,165,250,0.8) 70%)"
                  : "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(96,165,250,0.3) 70%)",
                boxShadow: node.active
                  ? `0 0 ${glowSize}px rgba(96, 165, 250, ${glowOpacity * 2})`
                  : `0 0 ${glowSize}px rgba(96, 165, 250, ${glowOpacity})`,
              }}
            />
          );
        })}
      </div>

      {/* Additional subtle particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const verticalOpacity = getVerticalOpacity(y);

          return (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full animate-pulse-slow"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: "1px",
                height: "1px",
                background: "rgba(96, 165, 250, 0.2)",
                opacity: verticalOpacity * 0.5,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NodeNetwork;
