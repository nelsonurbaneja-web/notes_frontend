import React, { useRef, useState, useEffect } from "react";
import FormLogin from "./components/FormLogin/FormLogin";
import GridNotes from "./components/GridNotes/GridNotes";
import Page from "./components/Page/Page";
import { Route } from "wouter";
import PageNote from "./components/PageNote/PageNote";
import UserContext, { UserProvider } from "./context/userContext";
import { createStore } from "redux"

const App = () => {
  const [user, setUser] = useState(null)
  const [isLogged, setIsLogged] = useState(null)
  const elementRef = useRef()

  useEffect(() => {
    console.log('user', user)
    if(localStorage.getItem('token')) setIsLogged(true) 
  }, [user])

  console.log(elementRef)
  


const INITIAL_NOTES = []

const noteReducer = (state = INITIAL_NOTES , action) => {
  if(action.type === 'NEW_NOTE') {
    console.log(action)
    state.concat(action.data)
    return state
  }

  return state
} 

const store = createStore(
  noteReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const createNote = () => {
  console.log('creando nota')
  store.dispatch({
    type: 'NEW_NOTE',
    data: {
      id: 1212,
      content: 'hola soy la nota'
    }
  })
}
  return (
    <>
     <button onClick={() => createNote()}>Create note</button>
    <UserContext.Provider value={{
          name: 'defult',
          email: 'default@gmail.com',
          role: 'default'
        }}>
      <UserProvider>
      <h1>Notas: </h1>
     
      <Page nameapp="La mejor app de delivery de curda" ref={elementRef}>
        <h1 onClick={() => elementRef.current.toggleVisibility()}>Contenido del page, si haces click cambias el stado</h1>
      {
        isLogged 
        ? <GridNotes />
        : <FormLogin setUser={setUser}/>
      }
      </Page>
      
      <h2>{store.getState()}</h2>
      {console.log(store.getState())}
      <Route path="/nota/:id" component={PageNote} />
      </UserProvider>
      </UserContext.Provider>
    </>
  );
};

export default App;
