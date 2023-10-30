import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

const Category = ({setCategory}) => {

  const dispatch = useDispatch();
 const {categories} = useSelector(state => state.categories);
 console.log(categories);
 const getdata= useCallback (()=>{ 
  dispatch(getCategories())
 },[])
  useEffect(()=>{
    getdata()
  } , [dispatch])



  return (
    <div className='w-1/6 bg-white p-4 max-h-screen flex items-center' >
        <div className='borber-b pb-1 px-2 text-xl font-bold '>KATEGORİ</div>
        {categories?.map((dt,i)=>
          <div onClick={()=>setCategory(dt?.categoryId)}  className='cursor-pointer hover:bg-gray-100 p-8 text-sm' key={i}>{dt?.categoryName}</div>
     )}
      </div>
  )
}

export default Category