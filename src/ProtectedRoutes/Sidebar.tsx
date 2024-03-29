import { useState } from "react";
import logo from "./logo.svg";
import "./AdminStyles.css";
import { FaUsers } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";

// const navItems = ["home", "settings", "backup", "mail", "cloud", "layers"];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">
              {isOpen ? <RxCross1/> : <IoMdMenu/>}
            </span>
          </button>
          {/* <img src={logo} className="sidebar-logo" /> */}
          <span>AM ROBOTICS</span>
        </header>
        <nav className="sidebar-menu">
          {/* {navItems.map((item) => ( */}
            <button  type="button" className="sidebar-button">
              <span className="material-symbols-outlined"><FaUsers/></span>
              <p>users</p>
            </button>
          {/* ))} */}
        </nav>
      </div>
    </nav>
  );
};
