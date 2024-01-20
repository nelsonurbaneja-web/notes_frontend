import React, { useContext } from "react";
import UserContext from "../../context/userContext";
import request from "../../services/request";

const FormLogin = (props) => {
  const { setUserAdmin } = useContext(UserContext)

  const handleLogin = async (e) => {
  
    e.preventDefault()
    const body = {
      email: e.target.Email.value,
      password: e.target.Password.value
    }

    console.log({body})
    const response = await request({method:'POST', endpoint: "/login", body})
    const data = await response.json()
    console.log(data)
    localStorage.setItem('token', data.token)
    setUserAdmin(data.user)
    props.setUser(data.user)
  }

  return (
    <>
      <h1>Login: </h1>
     <div>
       <form onSubmit={handleLogin}>
          <input type="text" placeholder="correo" name="Email"/>
          <input type="password" placeholder="correo" name="Password"/>
          <button>Login</button>
       </form>
     </div>
    </>
  );
};

export default FormLogin;
