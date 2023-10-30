import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getExaminedProducts } from '../../redux/examinedSlice';
import Product from './Product';
import ReactPaginate from 'react-paginate';
import Loaidng from '../Loaidng';

const ExaminedProduct = ({productId}) => {
  const dispatch= useDispatch();
  const {examinedProduct , examinedProductStatus}=useSelector(state=>state.examined)
  console.log(productId)
  useEffect(()=>{
      dispatch(getExaminedProducts(productId))
  },[dispatch])
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage =4
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = examinedProduct.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(examinedProduct.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % examinedProduct.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>    
 {examinedProduct[0]?<div> Bu ürünü inceleyenlerin incelediği diğer ürünler </div>:<></>} 
    {examinedProductStatus=="LOADİNG" ? <Loaidng/>:
    <div className='flex flex-wrap'>{currentItems?.map((product,i)=>(
      <Product key={i} product={product}/>
    ))}</div>}
  <ReactPaginate className='paginate'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>

  )
}

export default ExaminedProduct