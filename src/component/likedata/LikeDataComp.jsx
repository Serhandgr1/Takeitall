import React from 'react'
import Product from '../home/Product'
import { useDispatch } from 'react-redux'
import { removeFromLike } from '../../redux/likeDataSlice'
import {AiFillDislike} from "react-icons/ai"
const LikeDataComp = ({product}) => {
    const dispatch=  useDispatch()
    console.log(product)
  return (
    <div className=''>
    <div className='flex'>
        <Product key={product?.productId} product={product}/>
    </div>
    <div onClick={()=>dispatch(removeFromLike(product?.productId))} className='bg-red-500 text-white w-[100px] text-xl flex  text-center mx-20 cursor-pointer rounded-md h-15'>
      <div className='mx-2'>
      Kaldır
      </div>
      <div className='my-1'>
      <AiFillDislike/>
      </div>
    </div>
    </div>
  )
}

export default LikeDataComp