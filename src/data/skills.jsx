import { Cpu, Layers, Code, Server, Cloud, Database, GitBranch, Smartphone, Cog } from "lucide-react";

export const skills = [
  { name: "Java", icon: <Cpu className="h-5 w-5" />, category: "backend" },
  { name: "C#", icon: <Cog className="h-5 w-5" />, category: "backend" },
  { name: "React", icon: <Layers className="h-5 w-5" />, category: "frontend" },
  { name: "JavaScript", icon: <Code className="h-5 w-5" />, category: "frontend" },
  { name: "Node.js", icon: <Server className="h-5 w-5" />, category: "backend" },
  { name: "Firebase", icon: <Cloud className="h-5 w-5" />, category: "cloud" },
  { name: "MySQL", icon: <Database className="h-5 w-5" />, category: "database" },
  { name: "AWS", icon: <Cloud className="h-5 w-5" />, category: "cloud" },
  { name: "Git/GitHub", icon: <GitBranch className="h-5 w-5" />, category: "tools" },
  { name: "Android Studio", icon: <Smartphone className="h-5 w-5" />, category: "mobile" },
];
