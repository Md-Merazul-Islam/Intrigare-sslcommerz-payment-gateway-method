import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Pricing = () => {
  const data = useLoaderData();
  const products = data.products || [];
  console.log(products);
  return (
    <div>
      <h1 className="text-4xl text-sky-500 text-center my-11 bg-slate-200 py-5">All Products</h1>

      <div className="flex flex-wrap justify-center ">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Pricing;
