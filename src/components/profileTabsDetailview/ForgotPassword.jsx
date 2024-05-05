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
    <div className="p-4">
    <div className="fewf3">
    <h1 className="text-black font-black text-2xl mb-6">Forgot Password</h1> {/* Added heading */}
    <div className="sfdfef">
      <label htmlFor="oldpassword" className="text">Old Password</label>
      <input type="password" name="oldpassword" className="ere3s" id="oldpassword" placeholder="Enter your old password"/>
    </div>
    
    <div className="sfdfef">
      <label htmlFor="password" className="text">New Password</label>
      <input type="password" name="password" className="ere3s" id="password" placeholder="Enter your new password"/>
    </div>
    
    <div className="sfdfef">
      <label htmlFor="confirmpassword" className="text">Confirm Password</label>
      <input type="password" name="confirmpassword" className="ere3s" id="confirmpassword"placeholder="Confirm your password" />
    </div>
    
    <button className="as32df" onClick={() => {
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
  </div>
  
  );
};


export default Forgotpassword;
