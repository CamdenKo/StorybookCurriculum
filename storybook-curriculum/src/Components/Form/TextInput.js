import React from 'react'

export default (props) => {
  // const conditionalClassName = props.disabled ?
  const style = {
    height: '30px',
    fontSize: '20px',
  }
  return (
    <input
      style={style}
      {...props}
    />
  )
}
