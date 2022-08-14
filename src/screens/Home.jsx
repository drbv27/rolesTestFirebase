import React from 'react'
import AdminView from "../components/AdminView"
import UserView from "../components/UserView"

import firebaseApp from '../firebase/credenciales'
import {getAuth,signOut } from "firebase/auth"

const auth = getAuth(firebaseApp)

const Home = ({user}) => {
  return (
    <div>Home
      <button 
      onClick={()=>signOut(auth)}>
        Cerrar Sesión</button>
        {user.rol==="admin" ? <AdminView/> : <UserView/>}
    </div>
  )
}

export default Home