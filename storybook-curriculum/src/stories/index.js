import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../../public/index.css'
import {
  Button,
  TextInput,
} from '../Components'

storiesOf('Button', module)
  .add('primary', () => <Button primary onClick={action('clicked')}>Primary Button</Button>)
  .add('secondary', () => <Button onClick={action('clicked')}>Secondary Button</Button>)

storiesOf('TextInput', module)
  .add('Long', () => <TextInput  />)
