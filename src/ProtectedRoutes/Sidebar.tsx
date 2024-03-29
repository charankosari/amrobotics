import { useState } from "react";
// import logo from "./logo.svg";
import "./AdminStyles.css";
import { FaProductHunt, FaUsers } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import AdminUsers from "./Adminusers";
import AdminProducts from "./AdminProducts";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(""); // State to manage which component to render

  const handleMenuClick = (componentName) => {
    setActiveComponent(componentName);
    setIsOpen(false); // Close the sidebar after selecting a component
  };

  return (
    <div>
      <div>

      
    <nav className={`sidebar ${isOpen ? "open" : ""}`} style={{height:'100dvh'}}>
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
          <span>AM ROBOTICS</span>
        </header>
        <nav className="sidebar-menu">
            <button  type="button" className="sidebar-button" onClick={() => handleMenuClick("users")}>
              <span className="material-symbols-outlined"><FaUsers/></span>
              <p>users</p>
            </button>
        </nav>
        <nav className="sidebar-menu">
            <button  type="button" className="sidebar-button" onClick={() => handleMenuClick("products")}>
              <span className="material-symbols-outlined"><FaProductHunt/></span>
              <p>products</p>
            </button>
        </nav>
      </div>
    </nav>
    </div>
    <div>
   {activeComponent === "users" && <AdminUsers />}
        {activeComponent === "products" && <AdminProducts />}
    </div>
    </div>
  );
};
