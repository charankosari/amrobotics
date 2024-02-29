import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import "./cart.css";
const ForgotPassword = () => {
  //    const loading=false;
  //   const loadingView = () => {

  //       return (
  //         <div className='w-full h-full flex flex-row justify-center items-center'>
  //         <ThreeDots
  //         visible={true}
  //         height="80"
  //         width="80"
  //         color="#ff9f1c"
  //         radius="9"
  //         ariaLabel="three-dots-loading"
  //         wrapperStyle={{}}
  //         wrapperClass=""
  //         />
  //         </div>
  //       )
  //   }

  return (
    <div className="px-10 py-5 flex flex-col h-full">
      <div className="flex flex-row justify-between ">
        <h1 className="text-black font-black text-2xl">Forgot Password</h1>
      </div>

      <div className="coolinput">
        <label htmlFor=" inputt" className="text">
          Old Password
        </label>
        <input type="password" name="input" className="input bg-white " />
      </div>
      <div className="coolinput">
        <label htmlFor=" input" className="text">
          New Password
        </label>
        <input type="password" name="input" className="input bg-white" />
      </div>
      <div className="coolinput">
        <label htmlFor=" input" className="text">
          Confirm Password
        </label>
        <input type="password" name="input" className="input bg-white" />
      </div>
      <button className="w-[15%] bg-blue-700 text-white rounded-md  mt-4">
        Update
      </button>
      <Link className="btn-link mb-2 mt-4"> Forgot Password</Link>
    </div>
  );
};

//   if (loading) {
//     return loadingView();
//   } else {
//     return successView();
//   }

export default ForgotPassword;
