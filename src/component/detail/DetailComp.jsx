import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import ExaminedProduct from '../home/ExaminedProduct';
import SmillarProducts from '../home/SmillarProducts';
import {AiOutlineHeart} from "react-icons/ai"
import {FcLike} from "react-icons/fc"
import { addToLike, removeFromLike } from '../../redux/likeDataSlice';

const DetailComp = ({productDetail}) => {
    const dispatch = useDispatch();
    const [quantity , setQuantity]= useState(0);
    const {likeData} = useSelector(state=>state.likeData);
    var liked = false;
    const decremant=()=>{
        if(quantity>0)
        setQuantity(quantity-1)
        else return
    }
    const incremant=()=>{
        if(quantity<productDetail?.stock)
       setQuantity(quantity+1)
    else return
    }
    const addBacket=()=>{
        dispatch(addToCart({id: productDetail?.productId , title : productDetail?.productOzet , image: productDetail?.productImage, price: productDetail?.price , quantity: quantity  }))
    }
    const addLike=()=>{
        dispatch(addToLike({productId: productDetail?.productId , productOzet : productDetail?.productOzet , productName:productDetail?.productName , productImage: productDetail?.productImage , price: productDetail?.price }))
    }
  return (
    <>

    <div className='flex gap-10  mx-32 mb-10 mt-16'>         
        <img className='max-w-lg  max-h-96 object-cover ' src={productDetail?.productImage}></img>
        <div className='mx-10 mt-6'>
            <div className='text-4xl font-bold'>
                {productDetail?.productOzet}
            </div>
            <div className='my-2 text-2xl'>{productDetail?.productDetail}</div>
            <div className='my-2 text-xl text-red-500'>Raiting: {productDetail?.rating?.rate}</div>
            <div className='my-2 text-xl text-red-500'>Stok: {productDetail?.stock} adet</div>
            <div className='text-3xl font-bold'>{productDetail?.price} <span>TL</span> </div>
            <div className='flex items-center gap-5 my-4'>
                <div onClick={()=>decremant()} className='text-3xl cursor-pointer'>-</div>
                <input className='w-12 text-center text-3xl font-bold' type='text' value={quantity}/>
                <div onClick={()=>incremant()}className='text-2xl  cursor-pointer'>+</div>
                {likeData.forEach( (element) => {
                    element?.productId === productDetail?.productId ? liked = true : <></>
                })}              
            {liked? 
            <div className='cursor-pointer' onClick={()=>dispatch(removeFromLike(productDetail?.productId))}><FcLike/></div>:
            <div className='cursor-pointer' onClick={()=>addLike()}><AiOutlineHeart/></div>
            }
            </div>
           {quantity>0?<div onClick={()=>addBacket()} className='border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center' >Sepete Ekle</div> : <></>} 
        </div>
    </div>
    <div className='mx-2 my-10 font-bold text-2xl'><ExaminedProduct productId={productDetail?.productId}/></div>
    <div className='mx-2 my-10 font-bold text-2xl'><SmillarProducts productId={productDetail.categoryId}/></div>
    </>
  )
}

export default React.memo( DetailComp)
// birden fazla resim olduğunda alttaki slider ile resimleri kaydırmalı yapabilirsin
///   <SliderDetay product={imageDetay}/>
//   var imageDetay = [ productDetail?.productImage , 'https://i.pinimg.com/236x/79/e6/6f/79e66ffb59534b9f5479a6201a5ed11f.jpg'];