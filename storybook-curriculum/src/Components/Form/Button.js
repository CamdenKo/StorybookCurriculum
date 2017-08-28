import React from 'react'
import styled from 'styled-components'


export default (props) => {
  const Button = styled.button`
    height: 40px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: large;
    color: ${({ theme }) => props.primary ? 'white' : theme.primary};
    background-color: ${({ theme }) => props.primary ? theme.primary : 'white'};
    border: ${({ theme }) => theme.primary} 2px solid;
    border-radius: 100px;
  `
  return (
    <Button
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}
