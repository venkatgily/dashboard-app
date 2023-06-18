import React, {useState} from 'react'
import './layout.css'
import Sidebar from '../components/Sidebar/Sidebar'
import HeaderNav from '../components/HeaderNav/HeaderNav';
import Footer from '../components/Footer/Footer'

interface Props {
    children: React.ReactNode;
 } 

 const Layout: React.FC<Props> = ({children}) => {

  return (
    <div className="sb-nav-fixed">
      <HeaderNav />
      <div id="layoutSidenav">
       <Sidebar />
        <div id='layoutSidenav_content'>
         {children}
         <Footer />
         </div> 
      </div>
    </div>
  )
}

export default Layout;
