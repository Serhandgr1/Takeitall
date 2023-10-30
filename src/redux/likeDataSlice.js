import { createSlice } from "@reduxjs/toolkit";


const fetcFromLocalStorage=()=>{
    let likeData = localStorage.getItem("likeData");
    if(likeData){
        return JSON.parse(localStorage.getItem("likeData"))
    }
    else{
        return[]
    }
} 

const storeInLocalStorage=(data)=>{
    localStorage.setItem("likeData" , JSON.stringify(data))
}

const initialState={
    likeData:fetcFromLocalStorage(),
    itemCount:0,
    totalAmount:0

}


const likeDataSlice = createSlice({
    name:"likeData",
    initialState,
    reducers:{
        addToLike:(state,action)=>{
                    const isItemCart= state.likeData.find((item)=>item.productId === action.payload.productId)
                    if(isItemCart){
                        const tempCart= state.likeData.map((item)=>{
                            if(item.productId === action.payload.productId){
                                let tempTotalPrice = item.price ;
                                return {
                                    ...item ,  totalPrice:tempTotalPrice 
                                }
                            }else {
                                return item
                            }
                        })
                        state.likeData= tempCart;
                        storeInLocalStorage(state.likeData)
                    }
                    else{
                        state.likeData.push(action.payload)
                        storeInLocalStorage(state.likeData)

                    }
                },
                removeFromLike:(state,action)=>{
                    //KARTA HATA ALIRSAN BURAYA BAK
                    const tempCart = state.likeData.filter(item=>item.productId !== action.payload)
                    state.likeData = tempCart
                    storeInLocalStorage(state.likeData)
                },
            }
        })

        export const {addToLike , removeFromLike } = likeDataSlice.actions

        export default likeDataSlice.reducer