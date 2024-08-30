import React from 'react'
import './Progress.css'
import ProgressBar from './ProgressBar'


const Progress = () => {
    const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div> Your order has been delivered.</div>,
  },
]
  return (
    <div className='progress-parent'>
        <h3 style={{textAlign:'center',fontSize:"20px"}}>Step Progress Bar</h3>
      <ProgressBar steps={CHECKOUT_STEPS}/>
    </div>
  )
}

export default Progress
