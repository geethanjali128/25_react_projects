import React, { useState } from 'react';

const Tooltip = ({children,content,delay}) => {
  const[isVisible,setIsVisible]=useState(false)
  let timeOut;

  const handleShowTooltip=()=>{
    timeOut=setTimeout(()=>{
      setIsVisible(true)
    },delay||500)
  }

  const handleHideTooltp=()=>{
    clearTimeout(timeOut)
    setIsVisible(false)
  }

  return (
    <div className='tooltip-parent' >
       <img src={children} alt='shinchan' className='shinchan' onMouseEnter={handleShowTooltip} onMouseLeave={handleHideTooltp}/>
      <div  >
    {
      isVisible?<p className='tooltip'>{content}</p>:null
    }
      </div>
   </div>
  )
}

export default Tooltip
