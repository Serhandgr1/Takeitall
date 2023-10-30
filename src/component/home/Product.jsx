import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Product = ({product}) => {
    const navigate = useNavigate();
  return (
    <>
    <Link to={`products/${product?.productId}`} target='_blank'>
   <div className='w-[250px] p-3 mb-5 mx-5 border rounded-md relative cursor-pointer'>
        <div className='text-3xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1'>{product?.price} <span className='text-sm'>TL</span> </div>
        <img className='max-w-sm max-h-48 object-cover m-auto' src={product?.productImage}/>
        <div className='mx-2 mt-3'>{product?.productName}</div>
        <div className='px-3 mt-3 text-sm'>
            {product?.productOzet}
        </div>
     </div>
     </Link>
     </>
)
}

export default React.memo( Product)