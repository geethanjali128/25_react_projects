import React, { useState } from 'react';
import Pagination from './Pagination';
import './Pagination.css';

const PaginationProducts = () => {

    const dummyData=Array.from({length:100},(_,index)=>(
        {
        id:index+1,
        name:`product ${index+1}`
    }))


    const itemsPerPage=10
    const[currentPage,setCurrentPage]=useState(1)

    const indexOfLastItem=currentPage*itemsPerPage
    const indexOfFirstItem=indexOfLastItem-itemsPerPage

    const listOfProductsPerPage=dummyData.slice(indexOfFirstItem,indexOfLastItem)

    const handlePageChanges=(newPage)=>{
      setCurrentPage(newPage)
    }
   

  return (
    <div className='main-pagination'>
      <ul className='products'>
        {
          listOfProductsPerPage.map( product => <li key={product.id}>{product.name}</li>)
        }
      </ul>
      <Pagination
      currentPage={currentPage}
      totalPages={Math.ceil(dummyData.length/itemsPerPage)}
      onPageChange={handlePageChanges}
      />
    </div>
  )
}

export default PaginationProducts;
