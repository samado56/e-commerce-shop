import { OrdersContext } from "./OrdersContext";
import { useEffect, useState } from "react";
import { UseAuth } from "../Auth/AuthCntext";

const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

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

  useEffect(() => {
    fetchUserOrders();
  }, [token]);
  return (
    <>
      <OrdersContext.Provider value={{ orders }}>
        {children}
      </OrdersContext.Provider>
    </>
  );
};

export default OrdersProvider;
