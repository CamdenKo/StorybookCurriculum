import React from 'react'
// import '../../../public/index.css'

export default (props) => {
  const style = {
    height: '80px',
    paddingLeft: '30px',
    paddingRight: '30px',
  }
  const conditionalClassName = props.primary ? 'colorWhite  backgroundColorPrimary' : 'colorPrimary backgroundColorWhite'
  const className = `fontSizeXXL borderRadiusRounded borderPrimary ${conditionalClassName}`
  return (
    <button
      onClick={props.onClick}
      className={className}
      style={style}
    >
      {props.children}
    </button>
  )
}
