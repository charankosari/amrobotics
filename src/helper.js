/* eslint-disable no-unused-vars */
import axios from 'axios';

axios.defaults.baseURL="http://localhost:5080/api/v1"



export  async function GetProducts() {
  try {
    const response = await axios.get("/products")
    return response
   } 
  catch (error) {
    return error
  }
}


export  async function GetDetailProduct(id) {
  try {
    const response = await axios.get(`/product/${id}`)
    return response
   } 
  catch (error) {
    return error
  }
}

export  async function GetUserDetails() {
const jwtToken=localStorage.getItem("jwtToken")

  const config={
    method:"get",
    url:"/me",
    headers:{
      "Authorization":`Bearer ${jwtToken}`,
      "Content-Type":"application/json"
        }
  }
  try {
    const response =await axios(config)
    return response
   } 
  catch (error) {
    return error
  }
}

// add to cart item___________
export  async function sendToCartApi({id,cartCount}) {
  console.log(id,cartCount)
  const jwtToken=localStorage.getItem("jwtToken")
  
    const config={
      method:"post",
      url:`/me/cart/${id}`,
      headers:{
        "Authorization":`Bearer ${jwtToken}`,
        "Content-Type":"application/json"
          },
      data:{"quantity":cartCount}
    }
    try {
      const response =await axios(config)
      return response
     } 
    catch (error) {
      return error
    }
  }



  // get my cart details______________________
  export  async function getCartDetails() {
    const jwtToken=localStorage.getItem("jwtToken")
    
      const config={
        method:"get",
        url:"/me/cart",
        headers:{
          "Authorization":`Bearer ${jwtToken}`,
          "Content-Type":"application/json"
            }
      }
      try {
        const response =await axios(config)
        return response
       } 
      catch (error) {
        return error
      }
    }
  
      // delete my cartItem______________________
  export  async function deleteCart(id) {
    const jwtToken=localStorage.getItem("jwtToken")
    
      const config={
        method:"delete",
        url:"/me/cart",
        headers:{
          "Authorization":`Bearer ${jwtToken}`,
          "Content-Type":"application/json"
            },
            data:[id]
      }
      try {
        const response =await axios(config)
        return response
       } 
      catch (error) {
        return error
      }
    }

    

   // add to wishlist item___________
export  async function sendToWishlistApi(id) {
  const jwtToken=localStorage.getItem("jwtToken")
  
    const config={
      method:"post",
      url:`/me/wishlist/${id}`,
      headers:{
        "Authorization":`Bearer ${jwtToken}`,
        "Content-Type":"application/json"
          }
    }
    try {
      const response =await axios(config)
      return response
     } 
    catch (error) {
      return error
    }
  }

 

  
    // get my wishlist details______________________
  export  async function getWishlist() {
    const jwtToken=localStorage.getItem("jwtToken")
    
      const config={
        method:"get",
        url:"/me/wishlist",
        headers:{
          "Authorization":`Bearer ${jwtToken}`,
          "Content-Type":"application/json"
            }
      }
      try {
        const response =await axios(config)
        return response
       } 
      catch (error) {
        return error
      }
    }
  

    export  async function ForgotPassword(oldpassword,password,confirmpassword) {
      const jwtToken=localStorage.getItem("jwtToken")
      const data = {
        oldPassword: oldpassword,
        password: password,
        confirmPassword: confirmpassword

      };
        const config={
          method:"put",
          url:`password/update`,
          headers:{
            "Authorization":`Bearer ${jwtToken}`,
            "Content-Type":"application/json"
              },
          data: JSON.stringify(data) // Pass data in the request body

        }
        try {
          const response =await axios(config)
          return response
         } 
        catch (error) {
          return error
        }
      }



          // delete my wishlisstitem
  // export  async function deleteWishlistItem(id) {
  //   const jwtToken=localStorage.getItem("jwtToken")
  //     const config={
  //       method:"delete",
  //       url:`/me/wishlist/${id}`,
  //       headers:{
  //         "Authorization":`Bearer ${jwtToken}`,
  //         "Content-Type":"application/json"
  //           }
  //     }
  //     try {
  //       const response =await axios(config)
  //       return response
  //      } 
  //     catch (error) {
  //       return error
  //     }
  //   }
