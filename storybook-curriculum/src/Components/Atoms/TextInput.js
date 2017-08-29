import React from 'react'
import styled from 'styled-components'

export default (props) => {
  const TextInput = styled.input`
    height: 35px;
    font-size: 20px;
    margin: 0px 20px;
    border: 0px;
  `
  console.log('props', props)
  return (
    <TextInput
      autoFocus
      {...props}
    />
  )
}
