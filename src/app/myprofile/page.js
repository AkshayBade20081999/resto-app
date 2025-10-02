"use client";
import { useEffect, useState } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import Footer from "../_components/Footer";
const NEXT_PUBLIC_MONGO_URL = process.env.NEXT_PUBLIC_MONGO_URL;

const Page = () => {
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    getMyOrders();
  }, []);

  const getMyOrders = async () => {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    let response = await fetch(
      NEXT_PUBLIC_MONGO_URL + "/api/order?id=" + userStorage._id
    );
    response = await response.json();
    if (response.success) {
      setMyOrders(response.result);
    }
  };

  return (
    <div>
      <CustomerHeader />
      <h1>My Orders</h1>
      {myOrders.length > 0 ? (
        myOrders.map((item) => (
          <div
            className="restaurant-wrapper"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <h4>Name {item.data.name}</h4>
            <div>Amount: {item.amount}</div>
            <div>Address: {item.data.address}</div>
            <div>Status: {item.status}</div>
          </div>
        ))
      ) : (
        <h3>No orders found</h3>
      )}
      <Footer />
    </div>
  );
};

export default Page;
