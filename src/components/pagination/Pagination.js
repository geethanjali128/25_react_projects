import React from 'react'

const Pagination = ({currentPage,totalPages=10,onPageChange}) => {

  function generateTotalPages(){
    const pages=[]

    for(let i=1;i<=totalPages;i++){
      pages.push(i)
    }

    return pages
  }

  return (
    <div className='pagination'>
      <button className={`btn${currentPage===1?"disabled":""}`}
      onClick={()=> onPageChange(currentPage-1)} disabled={currentPage===1}
        >Prev
        </button>
      {
        generateTotalPages().map( pageNo => 
        <button  className={`btn${currentPage===pageNo?'active':""}`} key={pageNo} onClick={()=> onPageChange(pageNo)}>
          {pageNo}
          </button>
      )
      }
      <button className={`btn${currentPage===totalPages?"disabled":""}`}
      onClick={()=> onPageChange(currentPage+1)}
      disabled={currentPage===totalPages}
      >Next</button>
    </div>
  )
}

export default Pagination;
