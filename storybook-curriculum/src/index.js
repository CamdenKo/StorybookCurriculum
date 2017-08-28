import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import store from './store'
import Home from './Screens'
import theme from './theme'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker();
