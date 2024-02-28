import { configureStore } from "@reduxjs/toolkit";
import cart from '../storeFeatures/cartReducers.js'
import user from "../storeFeatures/authenticationReducer.js"


const store=configureStore({
    reducer:{
     cart,user
    }
        
})

export default store