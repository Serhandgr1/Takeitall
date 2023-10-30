import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product';
import ReactPaginate from 'react-paginate';
import { getSmillerProducts } from '../../redux/smillarProductsSlice';
import Loaidng from '../Loaidng';

const SmillarProducts = ({productId}) => {
  const dispatch= useDispatch();
  const {smillerProduct , smillerProductStatus}=useSelector(state=>state.smiller)
  console.log(productId)
  useEffect(()=>{
      dispatch(getSmillerProducts(productId))
  },[dispatch])
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage =4
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = smillerProduct.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(smillerProduct.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % smillerProduct.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>    
  {smillerProduct[0]?<div>Bu ürün ile benzer ürünler</div>:<></>} 
    {smillerProductStatus=="LOADİNG"?<Loaidng/>:
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

export default SmillarProducts