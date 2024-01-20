import React, { forwardRef , useState, useImperativeHandle } from "react";

const Page = forwardRef(({children, nameapp='Valor por defaolto de nameapp'}, ref) => {
  const [active, setActive] = useState(false)

  console.log('ref', ref)

  const toggleVisibility = () => setActive(prevState => !prevState)

  useImperativeHandle(ref, () => {
      return {
        toggleVisibility
      }
    } 
  )

  return (
   <div>
      <h1>{active ? 'Activado' : 'Desactivado'}</h1>
      <h3>{nameapp}</h3>
      <button onClick={() => toggleVisibility()}>{active ? 'Desactivar' : 'Activar'}</button>
      {children}
   </div>
  );
});

export default Page;
