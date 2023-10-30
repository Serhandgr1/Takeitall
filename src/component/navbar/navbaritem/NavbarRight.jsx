import React, { useEffect } from 'react'
import {BiSearch} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"
import {SlBasket} from "react-icons/sl"
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
const NavbarRight = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 const {carts}=useSelector(state=>state.carts)
 const {likeData}=useSelector(state=>state.likeData)
  useEffect(()=>{
      dispatch(getCartTotal())
  },[dispatch , carts])

  return (
    <div className="flex items-center gap-8">
      <div className='flex items-center border p-3 rounded-full bg-gray-200'>
        <input className='bg-gray-200 outline-none'   type='text' placeholder='Arama Yapın'></input>
        <BiSearch size={28}/>
      </div>
      <div onClick={()=>navigate("likeData")} className='relative cursor-pointer'>
      {likeData?.length>0? <div className='absolute -top-4 -right-5 text-2xl rounded-full w-8 h-8 flex items-center justify-center '>{likeData?.length}<AiOutlineHeart size={28}/>
      </div>:<AiOutlineHeart size={28}/>}
      </div>
      <div  onClick={()=>navigate("cart")} className='relative cursor-pointer'>
      {carts?.length>0? 
     <>
      <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center '>{carts?.length}</div> 
      <SlBasket size={28}/>
    </>:<SlBasket size={28}/>}  
      </div>
        </div>
  )
}

export default NavbarRight