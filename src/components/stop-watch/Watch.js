import React, { useEffect, useRef, useState } from 'react'


const Watch = ({initialTime}) => {

    const[time,setTime]=useState(initialTime)
    const[isRunning,setIsRunning]=useState(false)
    const intervalReference=useRef()

    useEffect(()=>{
        if(isRunning){
            intervalReference.current=setInterval(()=>{
                setTime( prevTime=>{
                    if(prevTime===0){
                        clearInterval(intervalReference.current)
                        setIsRunning(false)

                        return 0
                    }

                    return prevTime-1
                })
            },1000)
        }else{
            clearInterval(intervalReference.current)
        }

        return ()=>{
            clearInterval(intervalReference.current)
        }

    },[isRunning])

    const minutes=Math.floor(time/60)
    const seconds=time%60


    const handlePauseAndResume=()=>{
        setIsRunning(!isRunning)
    }

    const handleReset=()=>{
        clearInterval(intervalReference.current)
        setTime(initialTime)
        setIsRunning(false)
    }

    const handleStart=()=>{
        setIsRunning(true)
    }

  return (
    <div className='watch'>
         <h3>Stop Watch</h3>
      <p>{String(minutes).padStart(2,"0")}:{String(seconds).padStart(2,"0")}</p>
      <div className='button-container'>
        <button onClick={handlePauseAndResume}>{isRunning?"Pause":"Resume"}</button>
        <button onClick={handleReset}>Reset</button>
         <button onClick={handleStart}>Start</button>
      </div>

    </div>
  )
}

export default Watch
