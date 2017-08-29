import React from 'react'
import styled from 'styled-components'

import {
  Checkbox,
} from '../Atoms'

export default (props) => {
  const Card = styled.div`
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: 10px;
    width: 100%;
    border-radius: 2px;
    padding: 15px;
    font-family: Lato;
    display: flex;
    align-items: center;
    margin: 10px 0px;
    box-sizing: border-box;
  `
  return (
    <Card>
      <Checkbox checked={props.checked} onClick={props.onClick} />
      <div>
        {props.children}
      </div>
    </Card>
  )
}
