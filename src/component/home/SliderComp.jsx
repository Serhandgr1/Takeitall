import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getCampains } from '../../redux/campaignsSlice';
import { Link } from 'react-router-dom';

const SliderComp = () => {
   const dispatch =   useDispatch();
   const {campains , campainsProductStatus } = useSelector(state=>state.campains);
   console.log(campains)
    const settings = {
        dots: true,
        infinite: true,
        speed:500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const getdata= useCallback (()=>{ 
        dispatch(getCampains())
       },[])

useEffect(()=>{
  getdata()
},[dispatch])
  return (
    <div>
        <Slider {...settings}>    
          {campains?.map((dt,i)=>(
                      <div className='!flex items-center px-8' key={i} >
                      <div className='mx-20'>
                          <div className='text-6xl font-bold' >
                              {dt?.productOzet}
                          </div>
                          <div className='text-lg my-4'>{dt?.productDetail}</div>
                    <Link to={`products/${dt?.productId}`} target='_blank' ><div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-100'>İncele</div></Link>   
                      </div>
                      <img className='max-h-80 max-w-lg ' src={dt?.productImage} alt="" /> 
                   </div>
          ))}
          </Slider>
    </div>
  )
}

export default SliderComp