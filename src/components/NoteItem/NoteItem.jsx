import React from 'react'
import { Link } from "wouter";

const NoteItem = ({ date, content, important, id }) => {
  return (
    <Link href={`/nota/${id}`}><div>
      <h2>{content}</h2>
      <p>{date}</p>
      <p>Important: {important ? 'si' : 'no'}</p>
    </div> </Link>
  )
}

export default NoteItem;
