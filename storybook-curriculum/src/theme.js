import {
  css,
} from 'styled-components'

export default {
  primary: '#00ADB5',
  secondary: '#393E46',
  black: '#222831',
  white: '#EEEEEE',
  primaryFont: 'Lato',
  boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)',
}

const sizes = {
  phonePhone: 300,
  phoneTablet: 600,
  tabletTablet: 900,
  tabletDesktop: 1200,
  desktopBigDesktop: 1800,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})
