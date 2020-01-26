import React from 'react';
import './hamburgers.css';
import SideBar from "./Sidebar";

export default function NavSidebar() {
  return (
    <div className="fade-in-nav navbar-side navbar--fadein container">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"main-content"} />

      <div className="logo-column font-futura">
        <p>S</p>
        <p>V</p>
      </div>
    </div>
  )
}
