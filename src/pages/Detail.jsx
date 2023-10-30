import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDetailProduct } from '../redux/productSlice';
import DetailComp from '../component/detail/DetailComp';
import Loaidng from '../component/Loaidng';

const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {productDetail , productDetailStatus} = useSelector(state=> state.product);
    useEffect(()=>{
        dispatch(getDetailProduct(id))
    },[dispatch,id])
    console.log(productDetail);
  return (
    <div>
        {productDetailStatus == "LOADİNG" ? <Loaidng/>:<DetailComp productDetail={productDetail}/>}
    </div>
  )
}

export default Detail