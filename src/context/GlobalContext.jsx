import { useEffect, useState } from "react";
import { GlobalContext } from "./globalContext";

const GlobalState = ({ children }) => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const url = `https://dummyjson.com/products`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        console.log(data.products);
        setProducts(data.products);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <GlobalContext value={{ products }}>{children}</GlobalContext>
    </>
  );
};

export default GlobalState;
