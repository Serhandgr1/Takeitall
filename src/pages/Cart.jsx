import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../redux/cartSlice';
import CartCom from '../component/cart/CartCom';

const Cart = () => {

    const dispatch = useDispatch();
    const {carts , totalAmount , itemCount}=useSelector(state=>state.carts)
    console.log(carts , totalAmount ,itemCount )
     useEffect(()=>{
         dispatch(getCartTotal())
     },[dispatch , carts])

  return (
    <div>
        {carts?.length>0 ?<div>
            {
                carts?.map((cart,i)=>(
                    <CartCom key={i} cart={cart}/>
                ))
            }
            <div className='items-center justify-end' >
            <div className='flex items-center justify-end text-2xl'>TOPLAM TUTAR : <span className='font-bold ml-4' >{totalAmount}</span></div><br></br>
            <div className='flex items-center font-bold bg-gray-300 cursor-pointer justify-center rounded-md h-12 w-[240px] text-2xl'>Alış Verişi Tamamla</div>
            </div>
        </div>:
        <div>Sepetiniz Boş</div>}
        </div>
  )
}

export default Cart