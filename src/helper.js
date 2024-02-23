/* eslint-disable no-unused-vars */
import axios from 'axios';

axios.defaults.baseURL="http://localhost:5080/api/v1"

const jwtToken=localStorage.getItem("jwtToken")



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



