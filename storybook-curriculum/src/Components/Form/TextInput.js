import React from 'react'
import styled from 'styled-components'

export default (props) => {
  const TextInput = styled.input`
    height: 35px;
    font-size: 20px;
    border-radius: 100px;
    border: ${({ theme }) => theme.primary} 2px solid;
    padding: 0px 20px;
  `
  console.log('props', props)
  return (
    <TextInput
      {...props}
    />
  )
}
