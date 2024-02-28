import { useEffect, useState } from "react";
import { GetUserDetails } from "../../helper.js";
import {ThreeDots} from 'react-loader-spinner'




const UserProfile=()=>{
    const [details, setDetails] = useState("");
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getDetails();
    }, []);
  
    const getDetails = async () => {
      const response = await GetUserDetails();
      console.log(response);
      if (response.status == 200) {
        setDetails(response.data.user);
        setLoading(false);
      }
      console.log(details);
    };
    const addressess = [
      "Lorem ipsum dolor, sit amet consectetui e perferendis quo perspiciatis, voluptatem architecto alias inventore!",
      " Lorem ipsum dolor, sit amesi aliquid? Quibusdam itaque perferendis quo perspiciatis, voluptatem architecto alias inventore!",
    ];
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
    };
  

    const successView = () => {
        const { _id, name, email, number, role, wishList, cart } = details;
        console.log(details)
    return(
      // <div className="w-[63%] bg-[#D9D9D94D]" id="profile">
      <div className="flex flex-col ml-[44px] mt-[44px]" id="a1">
        <div className="text-6xl mb-[4rem]" id="prof">
          Profile Details
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-col w-[70%]">
            <div className="text-4xl mb-4" id="prof-name">
              {name}
            </div>
            <div className="flex flex-row gap-24" id="col">
              <h1 className="text-4xl" id="prof-name">
                {number}
              </h1>
              <h1 className="text-4xl " id="prof-name">
                {email}
              </h1>
            </div>
          </div>
          <div className="w-[190px] h-[190px] " id="prof-img">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt=""
              id="prof-img"
              className="w-[190px] h-[190px] rounded-xl"
            />
          </div>
        </div>
        <button
          className="bg-[#FF9F1C] w-[205px] h-[75px] rounded-xl text-4xl text-white text-bold"
          id="or-b"
        >
          {" "}
          Edit Profile{" "}
        </button>
  
        <div className="flex flex-col mt-[4rem] gap-4" id="mt">
          <div className="text-6xl" id="prof">
            Previous Adresses
          </div>
          <div className="flex flex-col gap-6" id="row">
            {addressess.map((address, index) => (
              <div
                key={index}
                className="text-3xl bg-white p-4 w-[80%] h-[180px] items-center flex"
                id="adresses"
              >
                {address}
              </div>
            ))}
            <button
              className="text-3xl bg- p-4 w-[20%] h-[180px] items-center flex bg-[#bebdbd4d] rounded-xl"
              id="adresses-but"
            >
              Add one more address
            </button>
          </div>
        </div>
      {/* </div> */}
    </div>
    )
  }

  if (loading) {
    return loadingView();
  } else {
    return successView();
  }

}

  export default UserProfile