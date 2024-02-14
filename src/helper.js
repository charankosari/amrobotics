/* eslint-disable no-unused-vars */
axios.defaults.baseURL="http://localhost:5080/api/v1"


import axios from 'axios';

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

