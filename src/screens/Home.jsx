import React from 'react'
import Layout from '../Layout'
import AdminView from "../components/AdminView"
import UserView from "../components/UserView"

import firebaseApp from '../firebase/credenciales'
import {getAuth,signOut } from "firebase/auth"

const auth = getAuth(firebaseApp)

const Home = ({user}) => {
  return (
    <Layout rol={user.rol}>
      <div>
        Home
      <button 
      onClick={()=>signOut(auth)}>
        Cerrar Sesión</button>
        {user.rol==="admin" ? <AdminView/> : <UserView/>}
      </div>
    </Layout>
  )
}

export default Home