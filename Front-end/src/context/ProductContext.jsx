import { useEffect, useState } from "react";
import { ProductContext } from "./productContext.js";

export default function ProductState({ children }) {
  const [oneProduct, setOneProduct] = useState({});
  const [products, setProducts] = useState([]);

  console.log("product context", oneProduct);
  async function fetchProducts() {
    const url = `http://localhost:5000/products`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        setProducts(data);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [products.length]);

  async function getSingleProduct(id) {
    const url = `http://localhost:5000/products/${id}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        setOneProduct(data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteProduct(delID) {
    const url = `http://localhost:5000/products/${delID}`;

    try {
      const res = await fetch(url, {
        method: "DELETE",
      });

      const data = await res.json();
      if (res.ok) {
        fetchProducts();
      }
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function postProduct(body) {
    const url = `http://localhost:5000/products`;

    try {
      const res = await fetch(url, {
        method: "POST",
        body,
      });
      const data = await res.json();

      console.log(data);
      fetchProducts();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <ProductContext.Provider
        value={{
          oneProduct,
          products,
          deleteProduct,
          getSingleProduct,
          fetchProducts,
          postProduct,
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
}
