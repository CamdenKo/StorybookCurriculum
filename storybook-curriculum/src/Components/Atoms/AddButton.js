import React from 'react'
import styled from 'styled-components'

export default (props) => {
  const Circle = styled.div`
    border-radius: 50px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding-bottom: 3px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.primary};
  `
  const Inner = styled.div`
    font-size: 20px;
    line-height: 20px;
    color: white;
  `
  return (
    <Circle onClick={props.onClick}>
      <Inner>
        +
      </Inner>
    </Circle>
  )
}
