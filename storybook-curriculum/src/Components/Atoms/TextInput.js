import React from 'react'
import styled from 'styled-components'

export default (props) => {
  const TextInput = styled.input`
    height: 35px;
    font-size: 20px;
    border: 0px;
    width: 100%;
    margin: 0 20px;
  `
  return (
    <TextInput
      autoFocus
      {...props}
    />
  )
}
