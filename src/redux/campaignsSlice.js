import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../utils/status";

const initialState=
{
    campains:[],
    campainsProductStatus:STATUS.IDLE

}

export const getCampains = createAsyncThunk("campanya" , async()=>
{
    if(initialState.campains[0]==null){
        const categor = await axios.get("https://localhost:44300/p/products-kampanya");  
        return categor.data;}
        return initialState.campains
}) 

const campaingsSlice = createSlice({
    name:"categories",
    initialState, 
    reducers:{

    },
    extraReducers:(builder)=>
    {
        builder.addCase( getCampains.fulfilled ,(state,action)=>{
            state.campains = action.payload
        })
       
    }
})

export default campaingsSlice.reducer