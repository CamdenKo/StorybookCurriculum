import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components'
import {
  Provider,
} from 'react-redux'

import '../../public/index.css'
import {
  Button,
  TextInput,
  ToDoCard,
  Checkbox,
  ToDoList,
  AddForm,
  AddButton,
  FullTask,
} from '../Components'
import theme from '../theme'
import store, {
  addTodo,
} from '../store'

store.dispatch(addTodo('Todo1'))
store.dispatch(addTodo('Todo2'))

addDecorator(story => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  </Provider>
))

storiesOf('Atoms/Button', module)
  .add('Primary Button', () => <Button primary onClick={action('clicked')}>Primary Button</Button>)
  .add('Secondary Button', () => <Button onClick={action('clicked')}>Secondary Button</Button>)
  .add('Add Button', () => <AddButton onClick={action('Add Button')} />)

storiesOf('Atoms/Text Input', module)
  .add('No Text', () => <TextInput placeholder="place-holder" />)
  .add('Text', () => <TextInput value="Sample Text" />)

storiesOf('Atoms/Checkbox', module)
  .add('Unchecked', () => <Checkbox />)
  .add('Checked', () => <Checkbox checked />)

storiesOf('Molecules', module)
  .add('AddForm', () => <AddForm />)
  .add('List', () => <ToDoList />)

storiesOf('Molecules/ToDoCard', module)
  .addDecorator(story => (
    <div style={{ width: '300px' }}>
      {story()}
    </div>
  ))
  .add('Short Text Unchecked', () => <ToDoCard>SHORT TEXT</ToDoCard>)
  .add('Short Text Checked', () => <ToDoCard checked>SHORT TEXT</ToDoCard>)
  .add('Long Text Unchecked', () => <ToDoCard>This is a lot of text that I am using for demonstration purposes this will have a lot of content in it</ToDoCard>)

storiesOf('Organisms/FullTask', module)
  .add('FullTaskModule', () => <FullTask />)
