import React from 'react'
import styled from 'styled-components'

export default (props) => {
  const TextInput = styled.input`
    height: 30px;
    font-size: 20px;
  `
  return (
    <TextInput
      {...props}
    />
  )
}
