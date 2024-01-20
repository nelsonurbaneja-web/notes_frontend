import React, {useState, useEffect, createContext} from 'react';

const UserContext = createContext({
 message: 'Esta intentando acceder a este contexto y no tiene acceso'
});

export const UserProvider = ({ children}) => {
  const [userAdmin, setUserAdmin] = useState([{mmesage: 'Notienes acceso'}])

  useEffect(() => {
    console.log('redner')
  }, [userAdmin])

  return (
    <UserContext.Provider value={{ userAdmin, setUserAdmin }}>
       {children}
    </UserContext.Provider>
  )
}
export default UserContext;