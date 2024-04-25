import { useParams ,useNavigate} from "react-router-dom"
import {ResetPass} from "../../helper"
import { useState } from "react"
import tickimage from "../assets/forgotpass.png"
import { ToastContainer, toast } from "react-toastify";



function ResetPasswordFunc(props){
  const navigate = useNavigate()
    const {id}=useParams()
    const [resetSuccess,setresetSuccess]=useState(false)

    const resetPassword=async(event)=>{
      event.preventDefault();
      const pass=document.getElementById("pass").value 
      const conPass=document.getElementById("conPass").value
      const response=await ResetPass(pass,conPass,id)
      if(response.status==201){
       setresetSuccess(true)
      }
      else{
        toast.error(response.response.data.error)
      }
      
    }
    
    return(
      <>
      {
        resetSuccess?
        <div className="flex flex-col justify-center  h-dvh items-center bg-[#e3e3e3] gap-3 ">
         <img  className='w-40'  src={tickimage}/>
         <h1 className="text-xl font-medium">Password Changed!</h1>
         <p>Your password has beed changed successfully.</p>
         <button onClick={()=>{navigate("/login")}} className='bg-[#FF9F1C] p-3 text-white mt-2 rounded-md'>
          Back to LoginPage
         </button>
        </div>:

        
      <div className="flex flex-row justify-center  h-dvh items-center bg-[#e3e3e3] ">
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
      <div className="flex flex-col justify-center p-9  shadow-xl w-min bg-white">
     <h1 className="text-xl text-center font-bold ">Reset Account Password</h1>
     <p className="text-sm text-center">Enter new password to reset your account password</p>
     <form className="mt-4 flex flex-col gap-5 " onSubmit={resetPassword}> 
    <div className="w-96">
         <lable className="text-md pb-0 mb-0 font-medium">New Password</lable>
         <input id="pass" className="border-[1px] rounded-sm w-96 outline-none border-gray-400 p-2" placeholder="Enter Password" type="text"/>
    </div>

    <div className="w-96">
         <lable className="text-md pb-0 mb-0 font-medium">Conform Password</lable>
         <input id="conPass" className="border-[1px] rounded-sm  w-96 outline-none border-gray-400 p-2" placeholder="Conform Password" type="text"/>
    </div>

         <button className="px-2 text-white py-1 bg-[#ff9f1c] w-40 rounded-sm h-12 self-start">Reset Password</button>
     <p className="text-sm font-normal">*Password should be atleast 8 characters</p>

     </form>
    </div>
   </div>

      }
      
      </>
    )
}

export default ResetPasswordFunc