import React, { useEffect, useState } from 'react';
import './Filter.css';

const Filter=()=>{
    const[loading,setLoading]=useState(false)
    const[products,setProducts]=useState([])
    const[filteredProducts,setFilteredProducts]=useState([])
    const[currentSelectedCategory,setCurrentSelectedCategory]=useState("")

    const fetchProducts=async()=>{
        try{
            setLoading(true)
            const res=await fetch("https://dummyjson.com/products")
            const data=await res.json()
            console.log(data)
            if(data?.products && data?.products.length>0){
                setLoading(false)
                setProducts(data?.products)
                setFilteredProducts(data?.products)
            }
        }catch(error){
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    useEffect(()=>{
        const cpyProducts=[...products]
        setFilteredProducts( 
            currentSelectedCategory!==""?cpyProducts.filter( productItem=> productItem.category.toLowerCase()===currentSelectedCategory.toLowerCase()):cpyProducts
        )
    },[currentSelectedCategory])

    const uniqueCategories=products&&products.length>0?[...new Set(products.map( item=>item.category))]:[]

    if(loading) return <h1 className='error'>Fetching Products!Please Wait.</h1>
    return(
        <div className='filter-container'>
            <h3>Filter Products By Category</h3>
            <div className='category'>
                {
                    uniqueCategories.map( category=>(
                        <button 
                        onClick={()=>{
                            setCurrentSelectedCategory(
                     currentSelectedCategory !== "" &&
                  currentSelectedCategory === category
                  ? ""
                  : category)
                        }}
                        key={category}>{category}</button>
                    ))
                }
            </div>
            <ul className='products-list'>
                {
                    filteredProducts&&filteredProducts.length>0?(
                         filteredProducts.map( product=> <li className='each-product'  key={product.id}><img className='product' src={product.images[0]} alt="product"/></li>)
                    ):null
                }
            </ul>
        </div>
    )
}

export default Filter;