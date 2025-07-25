import { useEffect, useState } from "react";
import { GlobalContext } from "./globalContext";


const GlobalState = ({ children }) => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const url = `http://localhost:5000/products`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        setProducts(data);
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
