import React, { useState, useEffect } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import Logo from "../assets/imgg.png";
import { CiSearch } from "react-icons/ci";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("Home");
  const navigate=useNavigate()
  useEffect(() => {
    const pathname = location.pathname;
    const lastPart = pathname.substring(pathname.lastIndexOf("/") + 1);
    setActiveLink(lastPart || "Home");
  }, [location]);

  return (
    <div className="navbar bg-white " id="nav">
      <div className="flex-[0.97] " id="ele">
        <Link to="/" className="btn btn-ghost text-xl sm:pl-1 pl-0 h-20 ml-4" id="ghost">
          <img src={Logo} alt="" className="h-20" />
        </Link>

        <div className="ml-24" id="circle">
          <ul className="space-x-12 bg-gray-700 px-16 text-xl rounded-full flex-row h-14 justify-center items-center ml-24 md:ml-0 hidden sm:flex">
            <li>
              <Link
                to="/"
                className={`nav-link ${activeLink === "Home" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/marketplace"
                className={`nav-link ${
                  activeLink === "marketplace" ? "active" : ""
                } `}
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`nav-link ${
                  activeLink === "services" ? "active" : ""
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link ${activeLink === "about" ? "active" : ""}`}
              >
                About 
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`nav-link ${activeLink === "blog" ? "active" : ""}`}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-3" id="one">
      
          <div id="searchbar" className="flex items-center mr-24">
            <input
              id="searchInput"
              type="text"
              placeholder="Search for the product.."
            />
            <button id="searchButton">
              <CiSearch id="searchIcon" />
            </button>
          </div>

          <div
            tabIndex={0}
            role="button"
            className="btn h-20 w-12 btn-ghost btn-circle " id="tab"
          >
            <div className="indicator" onClick={()=>navigate("/profile",{state:{tabId:"CART"}})} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-xl mt-4 indicator-item">8</span>
            </div>
          </div>
         
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-[5rem] rounded-full " id="userimg">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu  menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/profile" className="justify-between">
                My Profile
              </Link>
            </li>
            <li>
              <p>My Orders</p>
            </li>
            <li>
              <p onClick={()=>navigate("/profile",{state:{tabId:"WISHLIST"}})}>Wishlist</p>
            </li>
            <li>
              <Link to="/" onClick={()=>{
                localStorage.clear();
                
              }}>Signout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
