import { createSlice } from "@reduxjs/toolkit";

const user=createSlice({
    name:"user",
    initialState:{user:""},
    reducers:{
        storeUser(state,action){
            state.user=action.payload
        }
    }
})

// const user = createSlice({
//     name: "user",
//     initialState: { token: "" }, // Renamed "user" to "token" for clarity
//     reducers: {
//         storeToken(state, action) {
//             // Returning a new state object instead of mutating the existing one
//             return {
//                 ...state,
//                 token: action.payload // Assuming action.payload contains the JWT token
//             };
//         }
//     }
// });


export const{storeUser}=user.actions
export default user.reducer