import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState=
{
  categories:[]


}

export const getCategories = createAsyncThunk("category" , async()=>
{

        const categor = await axios.get("https://localhost:44300/p/category-all");
        return categor.data;
}) 

const categorySlice = createSlice({
    name:"categories",
    initialState, 
    reducers:{

    },
    extraReducers:(builder)=>
    {
        builder.addCase( getCategories.fulfilled ,(state,action)=>{
            state.categories = action.payload
        })
    }
})

export default categorySlice.reducer