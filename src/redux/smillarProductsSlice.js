import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../utils/status";

const initialState=
{
  smillerProduct:[],
  smillerProductStatus:STATUS.IDLE,

}

export const getSmillerProducts = createAsyncThunk("smiller" , async(id)=>
{
    ///p/category-all  /p/smallerProduct/{productId}
    const categor = await axios.get(`https://localhost:44300/p/getcategory-by-id/${id}`);
    return categor.data;
}) 

const examinedSlice = createSlice({
    name:"examined",
    initialState, 
    reducers:{

    },
    extraReducers:(builder)=>
    {
        builder
        .addCase( getSmillerProducts.pending ,(state,action)=>{
            state.smillerProductStatus = STATUS.LOADİNG
        }).addCase( getSmillerProducts.fulfilled ,(state,action)=>{
            state.smillerProduct = action.payload
            state.smillerProductStatus = STATUS.SUCCESS
        })
      
    }
})

export default examinedSlice.reducer