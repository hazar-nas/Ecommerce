import React from 'react'
import { Spinner } from 'react-bootstrap'
const Loader = () => {
  return (
    <Spinner
      animation='grow'
      style={{
        alignContent:'center',
        width: '35rem',
        height: '35rem',
        margin: 'auto',
        display: 'block',
        transition:'2500',
      }}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader
