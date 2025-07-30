import { createContext, useContext } from "react";

const intial = {
  Orders: [],
};
export const OrdersContext = createContext(intial);

export const useOrders = () => useContext(OrdersContext);
