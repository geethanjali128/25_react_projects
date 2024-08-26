import React, { useEffect, useState } from 'react'

const Clock = () => {
    const[time,setTime]=useState(new Date())

    useEffect(()=>{
        const updateTime=setInterval(()=>{
            setTime(new Date())
        },1000)

        return ()=>{
            clearInterval(updateTime)
        }
    },[])

  return (
    <div className='clock'>
      <div className='time'>
        <span>{time.getHours().toString().padStart(2,"0")}</span>:
        <span>{time.getMinutes().toString().padStart(2,"0")}</span>:
        <span>{time.getSeconds().toString().padStart(2,"0")}</span>
      </div>
      <div className='date'>
        {
            time.toLocaleDateString(undefined,{
                weekday:"long",
                year:"numeric",
                month:"long",
                day:"numeric"
            })
        }
      </div>
    </div>
  )
}

export default Clock
