import { OrdersContext } from "./OrdersContext";
import { useEffect, useState } from "react";
import { UseAuth } from "../Auth/AuthCntext";

const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [allOrders, setAllOrders] = useState([]);

  const { token } = UseAuth();
  const fetchUserOrders = async () => {
    const url = `http://localhost:5000/user/orders`;

    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      if (res.ok) {
        setOrders([...data]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAllOrdes = async () => {
    const url = `http://localhost:5000/orders`;

    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setAllOrders([...data]);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchUserOrders();
    fetchAllOrdes();
  }, [token]);
  return (
    <>
      <OrdersContext.Provider value={{ orders, allOrders }}>
        {children}
      </OrdersContext.Provider>
    </>
  );
};

export default OrdersProvider;
