import React, {useState, useEffect, useCallback, useContext} from "react";
import request from "../../services/request";
import { useRoute } from "wouter";
import NoteItem from "../NoteItem/NoteItem";
import UserContext from "../../context/userContext";

const PageNote = () => {
  const [note, setNote] = useState({})
  const [, params] = useRoute('/nota/:id');
  const [loadingNotes, setLoadingNotes] = useState(false);
  const [active, setActive] = useState(false);

  const { userAdmin } = useContext(UserContext)

  const getNote =  useCallback(
    async () => {
      setLoadingNotes(true)
      const response = await request({method: "GET", endpoint: `/notas/${params.id}`})
      const data = await response.json()
      console.log(data)
      setNote(data)
      setLoadingNotes(false) 
     },
     [params.id],
   )

  useEffect(() => {
    console.log('userAdmin: ', userAdmin)
   getNote()
  }, [getNote])

  return (
    <>
      <h1 onClick={() => setActive(!active)}>Page Note {active ? 'activo' : 'desactivado'}</h1>
      <div>
        {loadingNotes
        ? "cargando..."
        : 
            <NoteItem
              key={note.id}
              date={note.date}
              content={note.content}
              important={note.important}
              id={note.id}
            />
        }
      </div>
    </>
  );
};

export default PageNote;
