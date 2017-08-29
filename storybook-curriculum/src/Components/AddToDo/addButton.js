import React from 'react'
import styled from 'styled-components'

export default () => {
  const Circle = styled.div`
    border-radius: 50px;
    width: 30px;
    height: auto;
  `
  const Inner = styled.div`
    font-size: 20px;
    line-height: 20px;
  `
  return (
    <Circle>
      <Inner>
        +
      </Inner>
    </Circle>
  )
}
