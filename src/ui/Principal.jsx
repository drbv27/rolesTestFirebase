import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
 margin-left:14vw;
`

const Principal = ({...props}) => {
  return (
    <Contenedor>{props.children}</Contenedor>
  )
}

export default Principal