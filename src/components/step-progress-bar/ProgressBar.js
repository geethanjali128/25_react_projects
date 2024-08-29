import React, { useEffect, useRef, useState } from 'react'

const ProgressBar = ({steps=[]}) => {
    const[currentStep,setCurrentStep]=useState(1)
    const[isComplete,setIsComplete]=useState(false)
    const[margins,setMargins]=useState({
        marginLeft:0,
        marginRight:0
    })
     const stepRef=useRef([])



     useEffect(()=>{
        setMargins({
            marginLeft:stepRef.current[0].offsetWidth/2  ||0,
            marginRight:stepRef.current[steps.length-1].offsetWidth/2 || 0,
        })
    },[stepRef,steps.length])

    // if steps is empty
    if(!steps.length){
        return <></>
    }

    const ActiveComponent=steps[currentStep-1]?.Component

  
   

    const handleNext=()=>{
        setCurrentStep( prevStep=>{
            if(prevStep === steps.length){
                setIsComplete(true)

                return prevStep
            }

            return prevStep+1
        })
    }
    const calculateProgressBarWidth=()=>{
        return ((currentStep-1)/(steps.length-1)*100)
    }

  return (
    <>
    <div className='stepper'>
      {
        steps.map((step,index)=>{
            return (
                <div 
                key={step.name} 
                ref={(el)=>{stepRef.current[index]=el}}
                className={`step ${currentStep>index+1 || isComplete?"complete":""}
                    ${currentStep===index+1?"active":""}`}>
                    <div className='step-number'>
                        {currentStep>index+1 ||isComplete?(
                            <span>&#10003;</span>
                        ):(
                            index+1
                        )
                        
                        }
                        </div>
                    <div className='step-name'>{step.name}</div>
                </div>
            )
        })
      }
      <div  className='progress-bar'
       style={{width:`calc(100% - ${margins.marginLeft+margins.marginRight}px)`, marginLeft: margins.marginLeft,
          marginRight: margins.marginRight}
        }
        
        >
        <div className='progress' style={{width:`${calculateProgressBarWidth()}%`}}></div>
      </div>
    </div>
    <div className='active-component'><ActiveComponent/></div>
    <div className='btn-wrapper'>
        {!isComplete && ( 
            <button  
            className='btn'
            onClick={handleNext}
            >{currentStep===steps.length?"Finish":"Next"}</button>
        )}
       
    </div>
    </>
    
  )
}

export default ProgressBar
