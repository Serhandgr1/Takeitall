import React from 'react'
import Slider from 'react-slick';
const SliderDetay = ({product}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed:500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='max-w-xs'>
             <Slider {...settings}>    
          {product?.map((dt,i)=>(
                      <div className='!flex max-w-sm items-center' key={i} >
                      <div className='mx-2'>
                          <div className='' >                      
                          </div>        
                     </div>
                      <img className='max-h-80 max-w-lg mx-10' src={dt} alt="" /> 
                   </div>
          ))}
          </Slider>
    </div>
  )
}

export default SliderDetay