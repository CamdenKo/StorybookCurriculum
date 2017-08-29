import React from 'react'
import styled from 'styled-components'

import {
  ToDoList,
  AddForm,
} from '../../Components'
import {
  media,
} from '../../theme'

const Container = styled.div`
  width: 70%;
  ${media.tabletTablet`width: 100%;`}
  margin: auto;
`

export default () => (
  <Container>
    <ToDoList />
    <AddForm />
  </Container>
)
