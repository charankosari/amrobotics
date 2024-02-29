import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { ForgotPassword } from "../../helper";
import { useState } from "react";
import "./cart.css";
const Forgotpassword = () => {
       const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(null);

       const Forgot = async (oldpassword, password, confirmpassword) => {
              try {
                setLoading(true);
                const response = await ForgotPassword(oldpassword, password, confirmpassword);
                console.log(response);
                if (response.status === 201) {
                  setDetails(response.data.user);
                  setLoading(false);
                }
                console.log(details);
              } catch (error) {
                console.error('Error:', error);
                setLoading(false);
              }
            };


    const loadingView = () => {

        return (
          <div className='w-full h-full flex flex-row justify-center items-center'>
          <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#ff9f1c"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />
          </div>
        )
    }

  return (
    <div className="px-10 py-5 flex flex-col h-full">
      <div className="flex flex-row justify-between ">
        <h1 className="text-black font-black text-2xl">Forgot Password</h1>
      </div>

      <div className="coolinput">
        <label htmlFor=" inputt" className="text">
          Old Password
        </label>
        <input type="password" name="input" className="input bg-white " id="oldpassword" />
      </div>
      <div className="coolinput">
        <label htmlFor=" input" className="text" >
          New Password
        </label>
        <input type="password" name="input" className="input bg-white" id="password"/>
      </div>
      <div className="coolinput">
        <label htmlFor=" input" className="text">
          Confirm Password
        </label>
        <input type="password" name="input" className="input bg-white" id="confirmpassword"/>
      </div>
      <button className="w-[15%] bg-blue-700 text-white rounded-md  mt-4"  onClick={() => {
          const oldpassword = document.getElementById("oldpassword").value;
          const password = document.getElementById("password").value;
          const confirmpassword = document.getElementById("confirmpassword").value;
          Forgot(oldpassword, password, confirmpassword);
        }} disabled={loading}
        >
        Update
      </button>
      {loading && loadingView()}
    </div>
  );
};

//   if (loading) {
//     return loadingView();
//   } else {
//     return successView();
//   }

export default Forgotpassword;
