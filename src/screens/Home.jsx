import React from 'react'

import firebaseApp from '../firebase/credenciales'
import {getAuth,signOut } from "firebase/auth"

const auth = getAuth(firebaseApp)

const Home = () => {
  return (
    <div>Home
      <button 
      onClick={()=>signOut(auth)}>
        Cerrar Sesión</button>
    </div>
  )
}

export default Home