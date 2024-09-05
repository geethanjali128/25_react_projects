import React, { useEffect, useState } from 'react'
import './Currency.css'

const Currency = () => {
    const[amount,setAmount]=useState(1)
    const[fromCurrency,setFromCurrency]=useState("USD")
    const[toCurrency,setToCurrency]=useState("INR")
    const [exchangeRate, setExchangeRate] = useState();
    const[convertedAmount,setConvertedAmount]=useState()


    useEffect(()=>{
        fetchExchangeRate()
    },[fromCurrency,toCurrency,amount])

    const fetchExchangeRate=async()=>{
        const res=await fetch( `https://open.er-api.com/v6/latest/${fromCurrency}`)
        const result=await res.json()
        const calculatedRate = result?.rates[toCurrency];
        setExchangeRate(calculatedRate);

        setConvertedAmount((amount * calculatedRate).toFixed(2));
       
    }

    const handleAmountChange=(event)=>{
        setAmount(event.target.value)
    }
    const handleFromCurrencyChange=(event)=>{
        setFromCurrency(event.target.value)
    }
    const handleToCurrencyChange=(event)=>{
        setToCurrency(event.target.value)
    }
  return (
    <div className='currency-converter'>
        <div className='currency'>
            <h1>Currency Converter</h1>
      <div className='input-container'>
        <input 
        type="text"
        value={amount}
        onChange={handleAmountChange}
        name='amount'
        placeholder='Enter Amount'
        />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value={"USD"}>USD</option>
            <option value={"INR"}>INR</option>
            <option value={"EUR"}>EUR</option>
        </select>
      </div>
       <p>To</p>
       <div className='input-container'>
        <input
        type='number'
        value={convertedAmount}
        readOnly
        />
         <select value={toCurrency} onChange={handleToCurrencyChange}>
        <option value={"EUR"}>EUR</option>
        <option value={"INR"}>INR</option>
        <option value={"USD"}>USD</option>
      </select>
       </div>
        <p className="exchange-rate">
      Exchange Rate: <span>1 {fromCurrency} = {exchangeRate} {toCurrency}</span>
    </p>
        </div>
      
    </div>
  )
}

export default Currency
