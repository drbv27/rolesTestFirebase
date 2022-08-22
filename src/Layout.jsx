import React from 'react'
import Navbarl from './ui/Navbar'
import Principal from './ui/Principal'

const Layout = ({rol,...props}) => {

  return (
    <>
        <Navbarl rol={rol}/>
        <Principal>{props.children}</Principal>
    </>
  )
}

export default Layout