import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom'
import "./Sidebar.css";

// interface SidebarProps {
//    toggleClass: string;
// }

const Sidebar: React.FC = () => {
  const [active, setActive] = useState("")
  // const [dropdownToggle, setDropDownToggle] = useState(false);
  
  const location = useLocation()

  // useEffect(() => {
  //   setActive(location.pathname);
  // }, [location.pathname, active]);

  return (
    <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">

                            <NavLink to="/" className="nav-link">
                              <span className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></span>
                               Dashboard
                            </NavLink>
                            <NavLink to="/me" className="nav-link">
                              <span className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></span>
                               Me
                            </NavLink>
                            <NavLink to="/need-help" className="nav-link">
                                <span className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></span>
                                 Need help?
                            </NavLink>
                            <NavLink to="/ask-u" className="nav-link">
                                <span className="sb-nav-link-icon"><i className="fas fa-table"></i></span>
                                 Ask u
                            </NavLink>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        {/* <div className="small">Logged in as:</div>
                        Start Bootstrap */}
                    </div>
                </nav>
            </div>
  );
}

export default Sidebar;
