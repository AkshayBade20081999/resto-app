"use client";
import { useState } from "react";
import "./../style.css";
import RestaurantHeader from "../../_components/RestaurantHeader";
import AddFoodItems from "../../_components/AddFoodItem";
import FoodItemList from "../../_components/FoodItemList";
const Dashboard = () => {
  const [addItem, setAddItem] = useState(false);
  return (
    <div>
      <RestaurantHeader />
      <button onClick={() => setAddItem(true)}>Add Food </button>
      <button onClick={() => setAddItem(false)}>Dashboard</button>
      {addItem ? <AddFoodItems setAddItem={setAddItem} /> : <FoodItemList />}
    </div>
  );
};

export default Dashboard;
