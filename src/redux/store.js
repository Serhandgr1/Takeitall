import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice'
import productSlice from './productSlice'
import cartSlice from './cartSlice'
import searchSlice from './searchSlice'
import examinedSlice from './examinedSlice'
import smillarProductsSlice from './smillarProductsSlice'
import campaignsSlice from './campaignsSlice'
import likeDataSlice from './likeDataSlice'

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    product:productSlice,
    carts:cartSlice,
    search:searchSlice,
    examined:examinedSlice,
    smiller:smillarProductsSlice,
    campains:campaignsSlice,
    likeData:likeDataSlice
  },
})