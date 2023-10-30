import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProduct, getProduct } from '../../redux/productSlice';
import Loading from "../Loaidng"
import Product from './Product';
import ReactPaginate from 'react-paginate';
const Products = ({category , sort}) => {

  const dispatch = useDispatch();
  const {products ,productsStatus } = useSelector(state=>state.product);
  console.log(sort)
 const getdata= useCallback (()=>{ 
  dispatch(getProduct())
 },[])
  useEffect(()=>{
    if(category){
        dispatch(getCategoryProduct(category))
    }else{
      getdata()
    }
  },[dispatch,category])
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage =8
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
    <div>
      {
        productsStatus == "LOADİNG" ? <Loading/>:<>
          {category?<div className='mx-5'> Kategory: {category}</div>:<></>}
        <div className='flex flex-wrap '>
          {currentItems?.sort((a,b)=>sort=="inc" ? a.price-b.price : sort == "dec" ? b.price-a.price :null)?.map((dt,i)=>(
            <Product key={i} product={dt}/>
          ))
          }
        </div>
        </>
      }
      </div>
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

export default Products