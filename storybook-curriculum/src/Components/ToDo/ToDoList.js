import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  ToDoCard,
} from '../../Components'

const toDoList = (props) => {

  return (
    <div>
      {
        props.toDo.map(toDo => <ToDoCard checked={toDo.checked}>{toDo.text}</ToDoCard>)
      }
    </div>
  )
}

function mapStateToProps(store) {
  return {
    toDo: store.toDo,
  }
}

export default connect(mapStateToProps)(toDoList)

