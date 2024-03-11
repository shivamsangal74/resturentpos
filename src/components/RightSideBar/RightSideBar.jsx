import React, { useState } from "react";
import "./RightSideBar.scss";
import { SummaryCard } from "../SummaryCard/SummarCard";
import {
  DeleteFilled,
  PrinterFilled,
  UserOutlined,
} from "@ant-design/icons";
import burger from "../../assets/images/burger.png";
import coffee from "../../assets/images/coffee.png";
import pizza from "../../assets/images/pizza.png";
import { HorizontalLine } from "../HorizontalLine/HorizontalLine";
import { ButtonLabel } from "../Button/Button";
import { Input } from "../Input/Input";
import { useSelector } from 'react-redux';

export const RightSideBar = () => {
  const handleSaveClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  const handleOrderClick = () => {};
  const [loading, setLoading] = useState(false);
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const SummaryList = useSelector((state) => state.cart.items);
  // const SummaryList = [
  //   {
  //     id: 1,
  //     image: burger,
  //     title: "Burger",
  //     Qty: 2,
  //     Mrp: 50,
  //   },
  //   {
  //     id: 2,
  //     image: pizza,
  //     title: "Pizza",
  //     Qty: 1,
  //     Mrp: 150,
  //   },
  //   {
  //     id: 3,
  //     image: coffee,
  //     title: "Coffee",
  //     Qty: 1,
  //     Mrp: 80,
  //   },
  //   {
  //     id: 4,
  //     image: burger,
  //     title: "Burger",
  //     Qty: 2,
  //     Mrp: 50,
  //   },
  // ];
  const handleOpenUserPopup = () => {
    if(isUserPopupOpen){
      setIsUserPopupOpen(false);
    }else{
      setIsUserPopupOpen(true);
    }

  };

  const handleCloseUserPopup = () => {
    setIsUserPopupOpen(false);
  };
  const [customer, setCustomer] = useState({
    name: "",
    mobile: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };
  return (
    <>
      |
      <div className="rightSideBarContainer">
        <div className="name">
          <div>Bill No #4555</div>
          <div className="subName">
            <span onClick={handleOpenUserPopup}>Add Customer Details</span>
          </div>
        </div>
        <div className="icons">
          <UserOutlined onClick={handleOpenUserPopup} />
          <PrinterFilled />
          <DeleteFilled className="deteleIcon" />
        </div>
      </div>
      <div className="summaryList">
        {isUserPopupOpen && (
          <div className="customerPopupContainer">
            <Input
              type="number"
              value={customer.mobile}
              onChange={handleChange}
              name="mobile"
              placeholder="Enter customer mobile no"
            />
            <Input
              type="text"
              value={customer.name}
              onChange={handleChange}
              name="name"
              placeholder="Enter customer name"
            />
            <Input
              type="text"
              value={customer.address}
              onChange={handleChange}
              name="address"
              placeholder="Enter customer address"
            />
            <ButtonLabel
              label="Save"
              onClick={handleSaveClick}
              type="button"
              loader={loading}
              disabled={false}
              style={{
                backgroundColor: "#F9C300",
                height: "30px",
                width: "40%",
                color: "#000",
                borderBottomLeftRadius: "20px",
                marginTop:"10px"
              }}
            />
            <ButtonLabel
              label="Close"
              onClick={handleCloseUserPopup}
              type="button"
              disabled={false}
              style={{
                backgroundColor: "#f56868",
                height: "30px",
                width: "40%",
                color: "#000",
                borderBottomRightRadius: "20px",
                marginLeft: "10px",
                marginTop:"10px"
              }}
            />
          </div>
        )}
        {SummaryList &&
          SummaryList.map((list) => {
            return (
              <SummaryCard
                key={list.id}
                title={list.name}
                Mrp={list.price}
                Qty={list.quantity}
                image={list.img}
              />
            );
          })}
      </div>
      <div className="summaryContainer">
        <div className="summaryLabel">
          <div>Discount %</div>|<div>Add Amount</div>
        </div>
        <HorizontalLine />
        <div className="labelContainer">
          <div>Discount</div>
          <div>10</div>
        </div>
        <div className="labelContainer">
          <div>Tax</div>
          <div>0</div>
        </div>
        <div className="labelContainer">
          <div>Grand Total</div>
          <div>4555</div>
        </div>
        <div className="summaryLabel">
          <ButtonLabel
            label="Save"
            onClick={handleSaveClick}
            type="button"
            loader={loading}
            disabled={false}
            style={{
              backgroundColor: "#F9C300",
              height: "40px",
              width: "100%",
              color: "#000",
              borderBottomLeftRadius: "20px",
              marginLeft: "10px",
            }}
          />
          <ButtonLabel
            label="Order"
            onClick={handleOrderClick}
            type="button"
            disabled={false}
            style={{
              backgroundColor: "rgb(76, 230, 79)",
              height: "40px",
              width: "100%",
              color: "#000",
              borderBottomRightRadius: "20px",
              marginLeft: "10px",
            }}
          />
        </div>
      </div>
    </>
  );
};
