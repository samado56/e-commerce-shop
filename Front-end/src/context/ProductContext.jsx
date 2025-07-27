import { useEffect, useState } from "react";
import { ProductContext } from "./productContext.js";
import { useParams } from "react-router";

export default function ProductState({ children }) {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  async function getSingleProduct() {
    const url = `http://localhost:5000/products/${id}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        setProduct(data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  return (
    <>
      <ProductContext.Provider value={{ product }}>
        {children}
      </ProductContext.Provider>
    </>
  );
}
