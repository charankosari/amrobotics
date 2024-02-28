import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice=createSlice({
    name:"mycart",
    initialState:{cart:[]},
    reducers:{
      addToCart (state,action){
       const item={
        id:action.payload,
        quantity:1 
       }
       state.cart.push(item)
      }
    }
})

export const {addToCart} =cartSlice.actions 
export default cartSlice.reducer