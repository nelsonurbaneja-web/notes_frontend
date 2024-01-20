import React, { useState, useEffect } from "react";
import request from "../../services/request";
import NoteItem from "../NoteItem/NoteItem";


const GridNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loadingNotes, setLoadingNotes] = useState(false);

  useEffect(() => {
    console.log('loaising notas')
    const getNotes = async () => {
      setLoadingNotes(true);
      const response = await request({method:'GET', endpoint: "/notas"})
      const data = await response.json();
      console.log({data});
      setNotes(data);
      setLoadingNotes(false);
    };

    getNotes();
  }, []);

  return (
    <div>
    {loadingNotes
      ? "cargando..."
      : notes.map((note) => (
          <NoteItem
            key={note.id}
            date={note.date}
            content={note.content}
            important={note.important}
            id={note.id}
          />
      ))}
  </div>
  )
}

export default GridNotes