import { useEffect, useState } from "react";
import { ProductContext } from "./productContext.js";

export default function ProductState({ children }) {
  const [oneProduct, setOneProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [deletingLoader, setDeletingLoader] = useState(false);
  //snak bar messags
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [statusCode, setStatusCode] = useState();

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
      setDeletingLoader(true);
      const res = await fetch(url, {
        method: "DELETE",
      });

      const data = await res.json();
      setStatusCode(res.status);
      console.log(res.status);

      if (res.ok) {
        fetchProducts();
        setDeletingLoader(false);
        setSnackBarMessage(data);
      }
    } catch (err) {
      console.log(err.message);

      setDeletingLoader(false);
    }
  }

  async function postProduct(body) {
    const url = `http://localhost:5000/products`;
    try {
      setLoader(true);
      const res = await fetch(url, {
        method: "POST",
        body,
      });
      setStatusCode(res.status);
      const data = await res.json();
      setSnackBarMessage(data);
      console.log(data);
      if (res.ok) {
        fetchProducts();
      }
      // if(res.status!== 201){
      //   setSnackBarMessage(data);

      // }
      setLoader(false);
    } catch (err) {
      console.log(err.message);
      setLoader(false);
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
          loader,
          deletingLoader,
          snackBarMessage,
          statusCode,
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
}
