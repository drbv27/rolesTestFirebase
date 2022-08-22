import React from 'react'
import styled from '@emotion/styled'


const LeftNavBar = styled.div`
  background-color: #1097d5;
  position: fixed;
  width: 14vw;
  height: 100%;
  color:white;
  font-weight:bold;
  margin:0
`

const Navbarl = ({rol}) => {
  return (
    <LeftNavBar>
    <h2 className="titu">Menú Opciones</h2>

<ul>
  <li>
    <p>Inicio</p>
  </li>
  {rol==="admin"?
    <li>
    Admin
    </li>
    :
    null
}
</ul>


    </LeftNavBar>
  )
}

export default Navbarl