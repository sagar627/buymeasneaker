import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { getProduct } from "./helper/coreapicalls";

const Home = () => {
  const [products, setProduct] = useState([]);
  const [error, setError] = useState();

  const loadProducts = () => {
    getProduct().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
      }
    });
  };
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to the Sneaker Store">
      <div className="row">
        <h1 className="text-white text-right"> All Sneakers</h1>
        <div className="row">
          {/* Iterate over All Products */}
          {products.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};
export default Home;
