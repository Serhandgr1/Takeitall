import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBestSellingProducts} from '../../redux/productSlice';
import Loading from "../Loaidng"
import Product from './Product';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
const BestSellingProducts = () => {
  const navigate=  useNavigate();
  const dispatch = useDispatch();
  const {bestSellingProducts ,bestSellingProductsStatus } = useSelector(state=>state.product);
  const getdata= useCallback (()=>{ 
    dispatch(getBestSellingProducts())
   },[])
  useEffect(()=>{
    getdata()
  },[dispatch])




  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage =8
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = bestSellingProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(bestSellingProducts.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % bestSellingProducts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
    <div>
      {
        bestSellingProductsStatus == "LOADİNG" ? <Loading/>:<>
        <div className='flex flex-wrap'>
          {currentItems?.map((dt,i)=>(
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

export default BestSellingProducts