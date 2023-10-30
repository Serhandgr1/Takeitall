import React, { useState } from 'react'
import SliderComp from '../component/home/SliderComp'
import Sorting from "../component/home/Sorting"
import Categoty from "../component/home/Category"
import Products from  "../component/home/Products"
import SpacialProduct from '../component/home/SpacialProduct'
import BestSellingProducts from '../component/home/BestSellingProduct'
const Home = () => {
  const [sort , setSort] = useState("");
  const [category , setCategory] = useState();
  return (
      <div>
      <Categoty setCategory={setCategory}/>
      <SliderComp/>
      <div className="flex items-center mx-2">
      <Sorting setSort={setSort}/>
      </div>
      <div className='font-bold text-xl mx-8 mb-8'> <div className='mx-5'>Önce çıkan ürünler</div> 
        <Products category={category} sort={sort}/>
      </div>
      <div className='font-bold text-xl mx-8 mb-8'> <div className='mx-5'> Çok satan ürünler</div>
      <BestSellingProducts/>
      <SpacialProduct/>
      </div>
      </div>
  )
}

export default Home