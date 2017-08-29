import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components'

import '../../public/index.css'
import {
  Button,
  TextInput,
  ToDoCard,
  Checkbox,
} from '../Components'
import theme from '../theme'

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

storiesOf('ToDo/Card/Content', module)
  .addDecorator(story => (
    <div style={{ width: '300px' }}>
      {story()}
    </div>
  ))
  .add('Short Text Unchecked', () => <ToDoCard>SHORT TEXT</ToDoCard>)
  .add('Short Text Checked', () => <ToDoCard checked>SHORT TEXT</ToDoCard>)
storiesOf('ToDo/Card/Checkbox', module)
  .add('Unchecked', () => <Checkbox />)
  .add('Checked', () => <Checkbox checked />)
