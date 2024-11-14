import { createContext, ReactNode, useContext, useState } from "react";
import { pricePerItem } from "./constants";

export const OrderDetails = createContext(null);

export const useOrderDetails = () => {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error(
      "useOrderDetails must be used within an OrderDetailsProvider"
    );
  }
};

export const OrderDetailsProvider = ({ children }: { children: ReactNode }) => {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {},
    toppings: {},
  });

  const updateItemCount = (
    itemName: string,
    newItemCount: string,
    optionType: "scoops" | "toppings"
  ) => {
    const newOptionCounts = { ...optionCounts };

    newOptionCounts[optionType][itemName] = parseInt(newItemCount);

    setOptionCounts(newOptionCounts);
  };

  const resetOrder = () => {
    setOptionCounts({ scoops: {}, toppings: {} });
  };

  const calculateTotal = (optionType: "scoops" | "toppings") => {
    const countsArray = Object.values(optionCounts[optionType]);

    // total the values in the array of counts for the number of items
    const totalCount = countsArray.reduce((total, value) => total + value, 0);

    // multiply the total number of items by the price for this item type
    return totalCount * pricePerItem[optionType];
  };

  const totals = {
    scoops: calculateTotal("scoops"),
    toppings: calculateTotal("toppings"),
  };

  const value = { optionCounts, updateItemCount, resetOrder, totals };

  return (
    <OrderDetails.Provider value={value}>{children}</OrderDetails.Provider>
  );
};
