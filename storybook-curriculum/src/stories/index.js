import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components'

import '../../public/index.css'
import {
  Button,
} from '../Components'
import theme from '../theme'

addDecorator(story => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

storiesOf('Button', module)
  .add('Primary Button', () => <Button primary onClick={action('clicked')}>Primary Button</Button>)
  .add('Secondary Button', () => <Button onClick={action('clicked')}>Secondary Button</Button>)
