import React from 'react'
import styled from 'styled-components'

import {
  Checkbox,
} from '../../Components'

export default (props) => {
  const Card = styled.div`
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: 10px;
    width: 100%;
    border-radius: 2px;
    padding: 0px 10px;
    font-family: Lato;
    display: flex;
    align-items: center;
  `
  return (
    <Card>
      <Checkbox checked={props.checked} />
      {props.children}
    </Card>
  )
}
