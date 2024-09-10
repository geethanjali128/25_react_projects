import React, { useState } from 'react';
import './Tip.css';

const Tip=()=>{
    const[formState,setFormState]=useState({
        billAmount:null,
        tipPercentage:10,
        splitCount:1,
        tipAmount:null,
        errMsg:""
    })

    const handleInputChange=(event)=>{
     setFormState({
        ...formState,[event.target.name]:event.target.value
       })  
    }

    const calculateTip=()=>{

        const{billAmount,tipPercentage,splitCount}=formState

        if(!billAmount || billAmount<=0 || !tipPercentage || tipPercentage<=0){
            setFormState({
                ...formState,
                tipAmount:null,  // Explicitly resetting tipAmount
                errMsg:"Please enter valid values for Bill amount & Tip Percentage"
            })

            return     // Exit the function if inputs are invalid(early return)
        }

        // calculation logic
        const bill = parseFloat(billAmount);                      // Convert billAmount to a number
        const tip = (bill * tipPercentage) / 100;                 // Calculate the tip percentage
        const totalAmount = bill + tip;                           // Total bill + tip
        const tipPerPerson = tip / splitCount;              // Tip per person
        const totalAmountPerPerson = totalAmount / splitCount;    // Total amount per person

        setFormState({
            ...formState,
            tipAmount:{
                totalAmount:totalAmount.toFixed(2), // Total amount formatted to 2 decimals
                tipPerPerson: tipPerPerson.toFixed(2),
                totalAmountPerPerson: totalAmountPerPerson.toFixed(2)
            },
            errMsg:""
        })
    }
    return(
        <div className='container'>
             <div className='tip-calculator'>
            <h1>Tip Calculator</h1>
            <div className='input-container'>
                <label for="bill">Bill Amount:</label>
                <input type='number' id='bill' name='billAmount' value={formState.billAmount} onChange={handleInputChange}/>
            </div>
             <div className='input-container'>
                <label for="tip">Tip Percentage:</label>
                <input type='number' id='tip' name='tipPercentage' value={formState.tipPercentage} onChange={handleInputChange}/>
            </div>
             <div className='input-container'>
                <label for="people">Number Of People:</label>
                <input type='number' id='people' name='splitCount' value={formState.splitCount} onChange={handleInputChange}/>
            </div>
            <button onClick={calculateTip}>Calculate Tip</button>
            {
               formState.tipAmount ? (
               <div className='tip-result'>
                        <p>Total Amount: <span>{formState.tipAmount.totalAmount}</span></p>
                        <p>Tip Per Person:<span> {formState.tipAmount.tipPerPerson}</span></p>
                        <p>Total Amount Per Person: <span>{formState.tipAmount.totalAmountPerPerson}</span> </p>
               </div>
            ):null
            }
        </div>
        </div>
       
    )
}

export default Tip;