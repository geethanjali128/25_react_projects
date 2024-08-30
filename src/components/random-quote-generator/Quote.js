import React, { useEffect, useState } from 'react'
import './Quote.css'

const Quote = () => {
    const[isLoading,setIsLoading]=useState(false)
    const[quoteData,setQuoteData]=useState(null)


     useEffect(()=>{
        fetchQuote()
    },[])


    const fetchQuote=async()=>{
        try{
            setIsLoading(true)
            const apiRes=await fetch("https://zenquotes.io/api/random",{
                method:"Get"
            })
            const result=await apiRes.json()

            console.log(result)

            if(result && result.length > 0){
                setIsLoading(false)
                setQuoteData(result[0])
            }
    } catch(error){
        console.log(error)
    }
    }

   const refreshQuote=()=>{
        fetchQuote()
    }

    if(!quoteData) return <p style={{textAlign:"center"}}>oops!something went wrong.</p>

  return (
    <div className='random-quote-generator'>
      <h3>Random Quote Generator</h3>
      <div className='quote'>
         <p>{quoteData.a}</p>
          <q>{quoteData.q}</q>
      
        </div>
      <button  className='btn'  onClick={refreshQuote}>Refresh</button>
    </div>
  )
}

export default Quote
