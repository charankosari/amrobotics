import forgotpassimg from '../assets/forgotPass.png'
import { useNavigate } from 'react-router-dom'

function Checkmail() {
    const navigate=useNavigate()
    return(
        <div className=" flex flex-col justify-center items-center h-dvh">
           <img className='w-40' src={forgotpassimg}/>
           <p className='font-bold text-xl mb-3'>Password Reset Email Sent</p>
           <p>Please check your inbox to get password reset link</p>
           <button onClick={()=>{navigate("/gmailredirect")}} className='bg-[#FF9F1C] p-2 mt-2 rounded-md'>Check Mail</button>
        </div>
    )
  }
  export default Checkmail