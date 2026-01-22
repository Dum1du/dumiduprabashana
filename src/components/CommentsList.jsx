import React from 'react'
import CommentItem from './CommentItem';

const CommentsList = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <CommentItem key={comment.id} comment={comment} index={index} />
      ))}
    </>
  );
};


export default CommentsList