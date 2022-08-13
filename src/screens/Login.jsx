import { useState } from "react"
import firebaseApp from "../firebase/credenciales";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";

const auth = getAuth(firebaseApp)

const Login = () => {

  const[isRegistrando,setIsRegistrando]=useState(false);

  async function registrarUsuario(email,password,rol){
    createUserWithEmailAndPassword(auth,email,password)
  }

  function submitHandler (e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;

    if(isRegistrando){
      //registrar
      registrarUsuario(email,password,rol);
    }else{
      //login
    }

    console.log(email,password,rol);
  }

  return (
    <div>
      <h1>{ isRegistrando ? "Registrate" : "Inicia Sesión"}</h1>
      <form onSubmit={submitHandler}>
        <label>
          Correo electronico:
          <input type="email" id="email"/>
        </label>
        <label>
          Contraseña:
          <input type="password" id="password"/>
        </label>
        <label>
          Rol:
          <select id="rol">
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </select>
        </label>
        <input 
        type="submit"
        value={isRegistrando ? "Registrar" : "Iniciar Sesión"}
        />
      </form>
      <button onClick={()=> setIsRegistrando(!isRegistrando)}>
        { isRegistrando ? "Ya tengo cuenta" : "Quiero registrarme"}
      </button>
    </div>
  )
}

export default Login