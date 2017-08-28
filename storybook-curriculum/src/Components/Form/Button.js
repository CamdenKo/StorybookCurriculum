import React from 'react'

export default (props) => {
  const style = {
    width: '300px',
    height: '80px',
  }
  const conditionalClassName = props.primary ? 'colorWhite borderWhite backgroundColorPrimary' : 'colorPrimary borderPrimary backgroundColorWhite'
  const className = `fontSizeXXL borderRadiusRounded ${conditionalClassName}`
  return (
    <button
      className={className}
      style={style}
    >
      {props.children}
    </button>
  )
}
