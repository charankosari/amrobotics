import React, { useState } from "react";
import "./SignupPage.css";
import Logo from "../assets/imgg.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function SignupPage() {
  const navigate=useNavigate()
  const [userdata,setuserData]=useState({"name":"","email":"","number":"","password":""})

const register=async(event)=>{
  const toastId=toast.loading("please wait")
  
 try{
  event.preventDefault()
  const response=await axios.post("http://localhost:5080/api/v1/register",userdata)
  const jwtToken=response.data.jwtToken
  localStorage.setItem("jwtToken",jwtToken)
  toast.update(toastId, { render: "Login successful", type: "success", isLoading: false,autoClose:2000 });
  navigate("/")
 }
 catch(e){
  console.log(e.response.data)
  const errorMessage=JSON.parse(e.response.data.error);
  console.log(errorMessage)
  
  toast.update(toastId, { render: errorMessage, type: "error", isLoading: false,autoClose:2000 });

 }
}


// getting user registration form data
const getUserData=(event)=>{
   setuserData((prevstate)=>({...prevstate,[event.target.name]:event.target.value}))
   console.log(userdata)
}




  return (
   
    <div className="overflow-hidden overscroll-x-none">
       <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    <ToastContainer />
      <div className="flex flex-row h-[100dvh] overflow-hidden " id="main" >
        <div
          className="w-[40%] h-full z-10 text-white flex-col flex  px-[8rem] py-[10rem] bg-[#434142] "
          id="pad"
        >
          <div className="fixed bottom-[92vh] left-0 w-[30rem] h-[30rem] border-8 border-orange-500 rounded-full overflow-hidden"></div>
          <div className="fixed top-[92vh] right-[52%] w-[50rem] h-[50rem] border-t-8 border-r-white border-t-orange-500 rounded-full overflow-hidden z-2"></div>
          <h1 className="text-6xl  flex  font-bold" id="titleee">
            Welcome to <br />
            AM ROBOTICS
          </h1>
          <br />
          <br />
          <p className="text-3xl w-[80%]" id="wid">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            accusantium ad temporibus odio debitis impedit consectetur quam eius
            fuga tempora.
          </p>

          <div className="mt-[20rem]" id="space">
            <span className="text-3xl" id="stars">
              ⭐⭐⭐⭐⭐
            </span>
            <h2 className="w-[80%] text-3xl" id="wid">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa, hic id praesentium, repellat optio laboriosam dolore facere
              dolor recusandae perspiciatis, amet aperiam! Corporis, sint.
            </h2>
          </div>
          <div className="mt-12 rounded-md flex flex-col">
            <div className="flex flex-row items-center">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                className="w-14 h-14 rounded-full"
                id="imgg"
              />
              <div className="flex flex-col">
                <h1 className=" px-4 text-white text-3xl" id="imgg-title">
                  Devon Lane
                </h1>
                <h1 className=" px-4 text-white text-xl" id="imgg-cont">
                  Co-Founder,Crodinger
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] py-[10rem] px-[12rem] overflow-hidden z-10 bg-white" id="form-space">
          <img src={Logo} alt="Logo" className="h-[180px] w-auto" id="form-img"/>

          <form action="" onSubmit={register} className="flex gap-5 flex-col justify-start mt-4" id="gappp">
            <p className="text-4xl w-[85%] text-black " id="form-head">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              minima enim facilis ipsa quibusdam alias.
            </p>
            <label className="text-3xl text-black " id="labell">Full Name:</label>
            <input
            onChange={getUserData}
              type="text"
              required

              name="name"
              className="w-[50%] rounded bg-white border-2 border-black text-3xl leading-[3rem] "
              id="in"
            />

            <label className="text-3xl text-black " id="labell">Email:</label>
            <input
              onChange={getUserData}
              type="email"
              name="email"
              required

              id="in"
              className="w-[50%] rounded bg-white border-2 border-black text-3xl leading-[3rem]"
            />

            <label className="text-3xl text-black " id="labell">Phone Number:</label>

            <input
              onChange={getUserData}
              type="tel"
              name="number"
              required
              id="in"
              className="w-[50%] rounded bg-white border-2 border-black text-3xl leading-[3rem]"
            />
            <label className="text-3xl text-black " id="labell">Password:</label>
            <input
              onChange={getUserData}
              type="password"
              required

              id="in"
              name="password"
              className="w-[50%] rounded bg-white border-2 border-zinc-800 text-3xl leading-[3rem]"
            />

            <br />

           <button style={{width:'200px'}} className="text-3xl text-white  bg-orange-500 rounded-xl leading-[4rem]" id="button">
            Sign Up
           </button>
          </form>
          <br />
          <br />
          <p className="text-3xl text-black " id="labell">
            Already have an account? <a href="#" className="link leading-10 mb-2">Sign In</a>
          </p>
        </div>
      </div>
      <div className="container ">
        <div className="card">
            <a className="singup">Sign Up</a>
            <img src={Logo} alt=""  className='h-[130px] w-[200px]'/>
            <p className='px-[4rem] text-center text-black text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              minima enim facilis ipsa quibusdam alias.</p>
            <div className="inputBox1">
                    <input onChange={getUserData} type="text" required name="email" />
                <span className="user">Email</span>
            </div>

            <div className="inputBox">
            <input onChange={getUserData} type="text" required name="name" />

                <span>Username</span>
            </div>
            <div className="inputBox">
            <input type="tel" onChange={getUserData} required name="number"/>

                <span> NUmber</span>
            </div>

            <div className="inputBox">
            <input type="password" onChange={getUserData} required name="password"/>

                <span>Password</span>
            </div>

            <button className="enter" onClick={register}>Enter</button>
            <p className="text-black">Already have an account? <a href="#" className="link leading-10 mb-2">Sign In</a>
            </p>
            

        </div>
    </div>
    </div>
  );
}

export default SignupPage;
