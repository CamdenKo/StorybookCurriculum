import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../../public/index.css'
import {
  Button,
} from '../Components'

storiesOf('Button', module)
  .add('Primary Button', () => <Button primary onClick={action('clicked')}>Primary Button</Button>)
  .add('Secondary Button', () => <Button onClick={action('clicked')}>Secondary Button</Button>)
