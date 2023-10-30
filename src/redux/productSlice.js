import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import axios from "axios";
import { useCallback } from "react";

const initialState ={
    products:[],
    productsStatus: STATUS.IDLE,
    productDetail:[],
    productDetailStatus:STATUS.IDLE,
    bestSellingProducts :[],
    bestSellingProductsStatus:STATUS.IDLE
}
export const getProduct = createAsyncThunk("getproducts" , async ()=>
{
    if(initialState.products[0]==null){
        const product = await axios.get("https://localhost:44300/p/featuredProduct")
        return product.data
    }
    return initialState.products
  
})
export const getBestSellingProducts = createAsyncThunk("bestsellingproducts" , async ()=>
{  ///p/bestsellingproducts
    const product = await axios.get("https://localhost:44300/p/bestsellingproducts")
    return product.data
})
export const getCategoryProduct = createAsyncThunk("getcategoryproducts" , async (id)=>
{
    ///p/getcategory-by-id/{id}
    const product = await axios.get(`https://localhost:44300/p/getcategory-by-id/${id}`)
    return product.data
})
export const getDetailProduct = createAsyncThunk("getdetailproducts" , async (id)=>
{
    const product = await axios.get(`https://localhost:44300/p/${id}`)
    return product.data
})
const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(getProduct.pending, (state,action)=>{
            state.productsStatus = STATUS.LOADİNG
        })
        .addCase(getProduct.fulfilled, (state,action)=>{
            state.productsStatus = STATUS.SUCCESS
            state.products = action.payload
        })
        .addCase(getProduct.rejected, (state,action)=>{
            state.productsStatus = STATUS.FAİL
        })
        .addCase(getDetailProduct.pending, (state,action)=>{
            state.productDetailStatus = STATUS.LOADİNG
        })
        .addCase(getDetailProduct.fulfilled, (state,action)=>{
            state.productDetailStatus = STATUS.SUCCESS
            state.productDetail = action.payload
        })
        .addCase(getDetailProduct.rejected, (state,action)=>{
            state.productDetail = STATUS.FAİL
        })
        .addCase(getCategoryProduct.pending, (state,action)=>{
            state.productsStatus = STATUS.LOADİNG
        })
        .addCase(getCategoryProduct.fulfilled, (state,action)=>{
            state.productsStatus = STATUS.SUCCESS
            state.products = action.payload
        })
        .addCase(getCategoryProduct.rejected, (state,action)=>{
            state.productsStatus = STATUS.FAİL
        })
        .addCase(getBestSellingProducts.pending, (state,action)=>{
            state.bestSellingProductsStatus = STATUS.LOADİNG
        })
        .addCase(getBestSellingProducts.fulfilled, (state,action)=>{
            state.bestSellingProductsStatus = STATUS.SUCCESS
            state.bestSellingProducts = action.payload
        })
        .addCase(getBestSellingProducts.rejected, (state,action)=>{
            state.bestSellingProductsStatus = STATUS.FAİL
        })
    }
})

export default productSlice.reducer