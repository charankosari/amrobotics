import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { FaUserCircle } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import Footer from "../Footer/Footer";
import { RiUserHeartLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { RiCustomerServiceLine } from "react-icons/ri";
import { RiQuestionnaireFill } from "react-icons/ri";
import "./Profile.css";
import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GetUserDetails } from "../../helper.js";

function Profile() {
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
    return <div>loading</div>;
  };

  const successView = () => {
    const { _id, name, email, number, role, wishList, cart } = details;
    return (
      <div className="bg-white">
        <Navbar />
        <div className="flex flex-row  mt-12 h-[90dvh]  " id="some">
          <div className="flex flex-col gap-12 mx-12 w-[30%]" id="gap">

         


            <div className="flex flex-row gap-2 mx-4 border-b-2 border-b-zinc-400 pb-2">
              <CiViewList
                className="w-[90px] h-[90px] mr-3 text-[#FF9F1C]"
                id="icon"
              />
              <Link>
                <div className="flex flex-col">
                  <h1 className="text-5xl" id="head">
                    Your Orders
                  </h1>
                  <p className="text-2xl w-[70%]" id="head-text">
                    All your orders including present & past will be present
                    here
                  </p>
                </div>
              </Link>
            </div> 
            <div className="flex flex-row gap-2 mx-4 border-b-2 border-b-zinc-400 pb-2">
              <RiUserHeartLine
                className="w-[90px] h-[90px] mr-3 text-[#FF9F1C]"
                id="icon"
              />
              <div className="flex flex-col">
                <h1 className="text-5xl" id="head">
                  Whishlist
                </h1>
                <p className="text-2xl w-[70%]" id="head-text">
                  All your liked items are present in wishlist will be here
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 mx-4 border-b-2 border-b-zinc-400 pb-2">
              <BsCart3
                className="w-[90px] h-[90px] mr-3 text-[#FF9F1C]"
                id="icon"
              />
              <div className="flex flex-col">
                <h1 className="text-5xl" id="head">
                  Your Cart
                </h1>
                <p className="text-2xl w-[70%] " id="head-text">
                  All the items present in your cart will be present here
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 mx-4 border-b-2 border-b-zinc-400 pb-2">
              <FaKey
                className="w-[90px] h-[90px] mr-3 text-[#FF9F1C]"
                id="icon"
              />
              <div className="flex flex-col">
                <h1 className="text-5xl" id="head">
                  Change password
                </h1>
                <p className="text-2xl w-[70%]" id="head-text">
                  Change your previous password to the new password here
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 mx-4 border-b-2 border-b-zinc-400 pb-2">
              <RiCustomerServiceLine
                className="w-[90px] h-[90px] mr-3 text-[#FF9F1C] "
                id="icon"
              />
              <div className="flex flex-col">
                <h1 className="text-5xl" id="head">
                  Contact support
                </h1>
                <p className="text-2xl w-[70%]" id="head-text">
                  Contact us to get your queries solved in no time or to get
                  doubts clarified
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 mx-4 border-b-2 border-b-zinc-400 pb-2">
              <RiQuestionnaireFill
                className="w-[90px] h-[90px] mr-3 text-[#FF9F1C]"
                id="icon"
              />
              <div className="flex flex-col">
                <h1 className="text-5xl" id="head">
                  FAQ's(Frequently Asked Questions)
                </h1>
                <p className="text-2xl w-[70%]" id="head-text">
                  The most frequently asked questions & doubts{" "}
                </p>
              </div>
            </div>
            <button className="button-1 ">
              {" "}
              Sign Out <IoExitOutline className="ml-4" />{" "}
            </button>
          </div>
          <div className="w-[63%] bg-[#D9D9D94D]" id="profile">
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
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return loadingView();
  } else {
    return successView();
  }
}

export default Profile;
