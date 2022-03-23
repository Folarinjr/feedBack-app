import React from 'react'
import Lo from '../assets/loading-gif.gif'

const Loading = () => {
  return (
    <img src={Lo} alt="loading..." style={{ width: '100px', margin: 'auto', display: 'block'}}/>
  )
}

export default Loading