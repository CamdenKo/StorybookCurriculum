import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  AddButton,
} from '../Atoms'
import {
  TextInput,
} from '../../Components'
import {
  addTodo,
} from '../../store'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      text: '',
    }
    this.changeText = this.changeText.bind(this)
    this.submitText = this.submitText.bind(this)
    this.Container = styled.div`
      display:flex;
      align-items: center;
    `
  }

  changeText(text) {
    this.setState({ text })
  }

  submitText(text) {
    if (text) {
      this.props.sendTodo(text)
    }
  }

  render() {
    return (
      <this.Container>
        <TextInput placeholder="Add Task" />
        <AddButton />
      </this.Container>
    )
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = dispatch => ({
  sendTodo: text => dispatch(addTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
