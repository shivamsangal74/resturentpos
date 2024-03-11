import React, { useState } from "react";
import "./Sidebar.scss";
import { ContainerOutlined, FileOutlined, HomeFilled, ProductFilled } from "@ant-design/icons";
import logo from '../../assets/images/logo.png'
export const Sidebar = () => {
  const [activeItem ,setActive] = useState('Home')

  const handleActiveClick = (item) =>{
    setActive(item);
  }
  return (
    <div className="sidebarContainer">
      <div className="logoContainer">
      <img src={logo} style={{height:"100%",width:"100%"}} /> 
      </div>

      <div className="Links">
      

       <div className={`icons ${activeItem === 'Home' ? 'active' : ''}`} onClick={()=> handleActiveClick('Home')}>
         <HomeFilled /> <span>Home</span>
       </div>
       <div className={`icons ${activeItem === 'Items'? 'active' : ''}`}onClick={()=> handleActiveClick('Items')}>
         <ProductFilled /> <span>Items</span>
       </div>
       <div className={`icons ${activeItem === 'Bills'? 'active' : ''}`} onClick={()=> handleActiveClick('Bills')}>
         <ContainerOutlined /> <span>Bills</span>
       </div>
       <div className={`icons ${activeItem === 'Report'? 'active' : ''}`} onClick={()=> handleActiveClick('Report')}>
         <FileOutlined /> <span>Report</span>
       </div>
      </div>
    </div>
  );
};
