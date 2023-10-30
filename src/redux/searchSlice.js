import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import axios from "axios";

const initialState ={
    products:[],
    productsStatus: STATUS.IDLE,
    productDetail:[],
    productDetailStatus:STATUS.IDLE
}

export const getSearchProduct = createAsyncThunk("getsearchproducts" , async (search)=>
{
    const product = await axios.get(`https://fakestoreapi.com/products/category/${search}`)
    return product.data
})

const searchSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(getSearchProduct.pending, (state,action)=>{
            state.productsStatus = STATUS.LOADİNG
        })
    }
})

export default searchSlice.reducer