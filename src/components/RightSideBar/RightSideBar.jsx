import React, { useState } from "react";
import "./RightSideBar.scss";
import { SummaryCard } from "../SummaryCard/SummarCard";
import { DeleteFilled, PrinterFilled, DownOutlined } from "@ant-design/icons";
import burger from "../../assets/images/burger.png";
import coffee from "../../assets/images/coffee.png";
import pizza from "../../assets/images/pizza.png";
import { HorizontalLine } from "../HorizontalLine/HorizontalLine";
import { ButtonLabel } from "../Button/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export const RightSideBar = () => {
  const handleSaveClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  const handleOrderClick = () => {};
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const SummaryList = [
    {
      id: 1,
      image: burger,
      title: "Burger",
      Qty: 2,
      Mrp: 50,
    },
    {
      id: 2,
      image: pizza,
      title: "Pizza",
      Qty: 1,
      Mrp: 150,
    },
    {
      id: 3,
      image: coffee,
      title: "Coffee",
      Qty: 1,
      Mrp: 80,
    },
    {
      id: 4,
      image: burger,
      title: "Burger",
      Qty: 2,
      Mrp: 50,
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      |
      <div className="rightSideBarContainer">
        <div className="name">
          <div>Bill No #4555</div>
          <div className="subName">
            <span>Customer Name</span>
          </div>
        </div>
        <div className="icons">
          <PrinterFilled />
          <DeleteFilled className="deteleIcon" />
        </div>
      </div>
      <div>
        <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "#80849E" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            TabIndicatorProps={{ style: { backgroundColor: "black" } }}
            centered
          >
            <Tab
              label="Tables"
              style={{ color: value === 0 ? "black" : "white" }}
            />
            <Tab
              label="Home Delivery"
              style={{ color: value === 1 ? "black" : "white" }}
            />
            <Tab
              label="Take Away"
              style={{ color: value === 2 ? "black" : "white" }}
            />
          </Tabs>
        </Box>
        {SummaryList &&
          SummaryList.map((list) => {
            return (
              <SummaryCard
                key={list.id}
                title={list.title}
                Mrp={list.Mrp}
                Qty={list.Qty}
                image={list.image}
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
