import {  useState } from "react";
import Navbar from "../Navbar/Navbar";
import { CiViewList } from "react-icons/ci";
import { RiUserHeartLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { RiCustomerServiceLine } from "react-icons/ri";
import { RiQuestionnaireFill } from "react-icons/ri";
import "./Profile.css";
import { IoExitOutline } from "react-icons/io5";
import UserProfile from "../../components/profileTabsDetailview/profileView.jsx"
import Cart from "../profileTabsDetailview/cart.jsx";
import Wishlist from "../profileTabsDetailview/wishlist.jsx"
import ForgotPassword from "../profileTabsDetailview/ForgotPassword.jsx";
import Orders from "../../components/profileTabsDetailview/Orders.jsx"
import ContactUs from "../profileTabsDetailview/ContactUs.jsx";
import Faq from '../profileTabsDetailview/FAQ.jsx'
import { useNavigate,useLocation } from "react-router-dom";

const tabIds={
account:"ACCOUNT",
order:"ORDER",
wishlist:"WISHLIST",
cart:"CART",
changepass:"CHANGEPASS",
contact:"CONTACT",
Resetpassword:"RESETPASSWORD",
faqs:"FAQS",

}

function Profile() {
  const navigate=useNavigate();
  const location=useLocation()
  // console.log(location.state.tabId)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  const idd= location.state?location.state.tabId:tabIds.account
  
  
  const[activeId,setActiveId]=useState(idd)
  console.log(activeId)

  const changeActiveId=(id)=>{
    toggleMenu();
    setActiveId(id)

  }
   const showPages=()=>{
    switch(activeId){
    case tabIds.account:
      return <UserProfile/>
    case tabIds.cart:
      return <Cart/>
    case tabIds.wishlist:
      return <Wishlist/>
    case tabIds.order:
      return <Orders/>
    case tabIds.changepass:
      return <ForgotPassword/>
    case tabIds.contact:
      return <ContactUs/>
    case tabIds.faqs:
      return <Faq/>
 
   
     }
  }

    return (
      <div className="bg-white pb-6 overflow-hidden" >
        <Navbar />
        <div className="flex flex-row  mt-6   " id="some">
        <div id="navv">
        <button onClick={toggleMenu} style={{backgroundColor:'black',color:'white',padding:'10px',borderRadius:'5px',marginBottom:'5px'}}>menu</button>
      </div>
      
  <div className={`flex flex-col gap-12 mx-12 w-[30%] h-[full] `} id="gap" style={{ left: isMenuOpen ? '0' : '-100%',zIndex:2,backgroundColor:'#fff' }}>


            
          <div  id={tabIds.account} onClick={()=>{changeActiveId(tabIds.account)}} className="flex flex-row gap-2 mx-4 border-b-2 cursor-pointer border-b-zinc-400 pb-2">
              <CiViewList
                className="w-[90px] h-[90px] mr-3 text-[#FF9F1C]"
                id="icon"
              />
                <div className="flex flex-col">
                  <h1 className="text-4xl   " id="head">
                    Account Details
                  </h1>
                  <p className="text-2xl w-[70%]" id="head-text">
                    All your account details will be available
                  </p>
                </div>
             
            </div> 


            <div className="flex cursor-pointer flex-row gap-2 mx-4 border-b-2  border-b-zinc-400 pb-2" onClick={()=>{changeActiveId(tabIds.order)}} >
              <CiViewList
                className="w-[90px] h-[90px] mr-3 text-[#FF9F1C]"
                id="icon"
              />
              
                <div className="flex flex-col">
                  <h1 className="text-4xl " id="head">
                    Your Orders
                  </h1>
                  <p className="text-2xl w-[70%]" id="head-text">
                    All your orders including present & past will be present
                    here
                  </p>
                </div>
              
            </div> 
            <div  id={tabIds.wishlist} onClick={()=>{changeActiveId(tabIds.wishlist)}} className="flex flex-row cursor-pointer gap-2 mx-4 border-b-2 border-b-zinc-400 pb-2">
              <RiUserHeartLine
                className="w-[90px] h-[90px] mr-3 text-[#FF9F1C]"
                id="icon"
              />
              <div className="flex flex-col">
                <h1 className="text-4xl " id="head">
                  Whishlist
                </h1>
                <p className="text-2xl w-[70%]" id="head-text">
                  All your liked items are present in wishlist will be here
                </p>
              </div>
            </div>
            <div   id={tabIds.cart} onClick={()=>{changeActiveId(tabIds.cart)}}  className="flex flex-row gap-2 cursor-pointer mx-4 border-b-2 border-b-zinc-400 pb-2">
              <BsCart3 
                className="w-[90px] h-[90px] mr-3 text-[#FF9F1C]"
                id="icon"
              />
              <div className="flex flex-col">
                <h1 className="text-4xl " id="head">
                  Your Cart
                </h1>
                <p className="text-2xl w-[70%] " id="head-text">
                  All the items present in your cart will be present here
                </p>
              </div>
            </div>
            <div id={tabIds.changepass} onClick={()=>{changeActiveId(tabIds.changepass)}}  className="flex cursor-pointer flex-row gap-2 mx-4 border-b-2 border-b-zinc-400 pb-2">
              <FaKey
                className="w-[90px] h-[90px] mr-3 text-[#FF9F1C]"
                id="icon"
              />
              <div className="flex flex-col">
                <h1 className="text-4xl " id="head">
                  Change password
                </h1>
                <p className="text-2xl w-[70%]" id="head-text">
                  Change your previous password to the new password here
                </p>
              </div>
            </div>
     
            <div className="flex flex-row gap-2 mx-4 border-b-2 border-b-zinc-400 pb-2 cursor-pointer"  id={tabIds.contact} onClick={()=>{changeActiveId(tabIds.contact)}}>
              <RiCustomerServiceLine
                className="w-[90px] h-[90px] mr-3 text-[#FF9F1C] "
                id="icon"
              />
              <div className="flex flex-col " >
                <h1 className="text-4xl " id="head">
                  Contact support
                </h1>
                <p className="text-2xl w-[70%]" id="head-text">
                  Contact us to get your queries solved in no time or to get
                  doubts clarified
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 mx-4 border-b-2 border-b-zinc-400 pb-2" id={tabIds.faqs} onClick={()=>{changeActiveId(tabIds.faqs)}}>
              <RiQuestionnaireFill
                className="w-[90px] h-[90px] mr-3 text-[#FF9F1C]"
                id="icon"
              />
              <div className="flex flex-col">
                <h1 className="text-4xl" id="head">
                  FAQ's(Frequently Asked Questions)
                </h1>
                <p className="text-2xl w-[70%]" id="head-text">
                  The most frequently asked questions & doubts{" "}
                </p>
              </div>
            </div>
            <button className="button-1 " onClick={()=>{
              localStorage.removeItem('jwtToken');
              navigate('/');
            }}>
              {" "}
              Sign Out <IoExitOutline className="ml-4" />{" "}  
            </button>
          </div>

          <div className="w-[63%] bg-[#D9D9D94D] text-black" id="profile">
         {
        showPages()
         }
         </div>
        </div>
      </div>
    );
  }

export default Profile;