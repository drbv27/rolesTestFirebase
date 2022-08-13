import { useState } from "react"


const Login = () => {

  const[isRegistrando,setIsRegistrando]=useState(false)

  return (
    <div>
      <h1>{ isRegistrando ? "Registrate" : "Inicia Sesión"}</h1>
      <form>
        <label>
          Correo electronico:
          <input type="email"/>
        </label>
        <label>
          Contraseña:
          <input type="password"/>
        </label>
        <label>
          Rol:
          <select>
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </select>
        </label>
        <input 
        type="submit"
        value={isRegistrando ? "Registrar" : "Iniciar Sesión"}
        />
      </form>
    </div>
  )
}

export default Login