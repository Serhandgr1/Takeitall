import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../utils/status";

const initialState=
{
  examinedProduct:[],
  examinedProductStatus:STATUS.IDLE

}

export const getExaminedProducts = createAsyncThunk("examined" , async(id)=>
{
    ///p/category-all  /p/smallerProduct/{productId}
    const categor = await axios.get(`https://localhost:44300/p/get-similarreviewedproduct/${id}`);
    return categor.data;
}) 

const examinedSlice = createSlice({
    name:"examined",
    initialState, 
    reducers:{

    },
    extraReducers:(builder)=>
    {
        builder.addCase( getExaminedProducts.fulfilled ,(state,action)=>{
            state.examinedProductStatus = STATUS.SUCCESS
            state.examinedProduct = action.payload
        })
        .addCase( getExaminedProducts.pending ,(state,action)=>{
            state.examinedProductStatus = STATUS.LOADİNG
        })
    }
})

export default examinedSlice.reducer