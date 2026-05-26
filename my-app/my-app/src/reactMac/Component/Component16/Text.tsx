import React from 'react'
import CommentCard from './CommentCard'

export default function Text() {
  const handleDelete = (id : number) => {
    console.log(`삭제한 댓글 id : ${id}`);
  }
  return (
    <>
      <CommentCard
        username="kim"
        onDelete={(id) => handleDelete(id)}
        id={3}
      >
        <p>리액트 너무 어렵다...</p>
    </CommentCard>
    </>
  )
}
