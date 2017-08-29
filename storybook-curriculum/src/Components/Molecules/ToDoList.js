import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  ToDoCard,
} from '../../Components'
import {
  media,
} from '../../theme'
import {
  toggleTodo,
} from '../../store'

const toDoList = (props) => {
  const Container = styled.div`
    margin: auto;
    width: 100%;
  `
  return (
    <Container>
      {
        props.toDo.map(toDo => <ToDoCard checked={toDo.checked} onClick={() => props.toggleToDo(toDo.id)}>{toDo.text}</ToDoCard>)
      }
    </Container>
  )
}

function mapStateToProps(store) {
  return {
    toDo: store.toDo,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleToDo(id) {
      dispatch(toggleTodo(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(toDoList)

