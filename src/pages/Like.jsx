import React, { useEffect, useState } from 'react'
import LikeDataComp from '../component/likedata/LikeDataComp'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate';
const Like = () => {
  const dispatch =  useDispatch();
  const {likeData} = useSelector(state=>state.likeData)
  console.log(likeData)
  useEffect(()=>{

  },[likeData])

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage =4
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = likeData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(likeData.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % likeData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  return (
    <>
    <div className='mx-10 my-20 font-bold text-3xl'>
        Beğendiğin ürünler
        <div className='flex flex-wrap '>
          {currentItems?.map((product,i)=>(
                <LikeDataComp key={i} product={product}/>
          ))}
            
        </div>
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
              <div>Bu ürünleri beğenenler bunları aldı</div>
        <div>İlgini çekebilecek ürünler</div>
    </>
  )
}

export default Like