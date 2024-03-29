import { useState } from "react";
import "./AdminStyles.css";
import logo from './logo.svg'
const navItems = ["home", "settings", "backup", "mail", "cloud", "layers"];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button id="button"
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
          <img src={logo} className="sidebar-logo" />
        </header>
        <nav className="sidebar-menu">
          {navItems.map((item) => (
            <button key={item} type="button" className="sidebar-button" id="button">
              <span className="material-symbols-outlined">{item}</span>
              <p>{item}</p>
            </button>
          ))}
        </nav>
      </div>
    </nav>
  );
};
