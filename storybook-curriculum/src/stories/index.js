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
} from '../Components'
import theme from '../theme'
import store, {
  addTodo,
} from '../store'

store.dispatch(addTodo('Todo1'))
store.dispatch(addTodo('Todo2'))

addDecorator(story => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

storiesOf('Form/Button', module)
  .add('Primary Button', () => <Button primary onClick={action('clicked')}>Primary Button</Button>)
  .add('Secondary Button', () => <Button onClick={action('clicked')}>Secondary Button</Button>)

storiesOf('Form/Text Input', module)
  .add('No Text', () => <TextInput placeholder="place-holder" />)
  .add('Text', () => <TextInput value="Sample Text" />)

storiesOf('List', module)
  .addDecorator(story => (
    <Provider store={store}>
      {story()}
    </Provider>
  ))
  .add('List', () => <ToDoList />)

storiesOf('Card/Content', module)
  .addDecorator(story => (
    <div style={{ width: '300px' }}>
      {story()}
    </div>
  ))
  .add('Short Text Unchecked', () => <ToDoCard>SHORT TEXT</ToDoCard>)
  .add('Short Text Checked', () => <ToDoCard checked>SHORT TEXT</ToDoCard>)
  .add('Long Text Unchecked', () => <ToDoCard>This is a lot of text that I am using for demonstration purposes this will have a lot of content in it</ToDoCard>)

storiesOf('Card/Checkbox', module)
  .add('Unchecked', () => <Checkbox />)
  .add('Checked', () => <Checkbox checked />)
