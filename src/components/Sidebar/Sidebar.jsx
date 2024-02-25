import React from "react";
import "./Sidebar.scss";
import { ContainerOutlined, FileOutlined, HomeFilled, ProductFilled } from "@ant-design/icons";

export const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="logoContainer">

      </div>

      <div className="Links">
      

       <div className="icons active">
         <HomeFilled /> <span>Home</span>
       </div>
       <div className="icons">
         <ProductFilled /> <span>Items</span>
       </div>
       <div className="icons">
         <ContainerOutlined /> <span>Bills</span>
       </div>
       <div className="icons">
         <FileOutlined /> <span>Report</span>
       </div>
      </div>
    </div>
  );
};
