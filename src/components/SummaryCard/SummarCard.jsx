import React from "react";
import './SummaryCard.scss';

export const SummaryCard = ({title,image,Qty,Mrp}) => {

  return (
    <div className="summaryCardContainer">
         <div className="imgages">
            <img src={image } alt="Summary Image" />
        </div>
     <div className="title">{title}{'('+Qty +'x'+ Mrp+')'}</div>
      <div className="title">₹ {Qty*Mrp}</div>
    </div>
  );
};
