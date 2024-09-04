
import React from 'react'
import shinchan from '../images/shinchan.png'
import Tooltip from './Tooltip'
import './Tooltip.css'

const TooltipParent = () => {
  return (
    <div className='main'>
      <h1>Tooltip Using React</h1>
      <Tooltip  children={shinchan} content={"Hello,I am shinchan"} delay={1000}/>
    </div>
  )
}

export default TooltipParent
