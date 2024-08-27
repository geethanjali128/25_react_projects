import React from 'react'
import Watch from './Watch'
import './Watch.css'


const WatchParent = () => {
  return (
    <div className='stop-watch' >
       
      <Watch initialTime={1500}/>
    </div>
  )
}

export default WatchParent
