import React from 'react'
import styled from 'styled-components'

export default (props) => {
  const Box = styled.div`
    height: 30px;
    width: 30px;
    border: 1.5px solid black;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
  `
  const Inner = styled.div`
    font-family: Helvetica;
    font-size: 25px;
  `
  return (
    <Box onClick={props.onClick}>{props.checked && <Inner>X</Inner>}</Box>
  )
}
