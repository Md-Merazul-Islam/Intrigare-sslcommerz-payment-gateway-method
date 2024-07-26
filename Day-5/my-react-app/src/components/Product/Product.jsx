import React from "react";

const Product = ({ product, addToCart }) => {
  const { name, description, price } = product;
  return (
    <div className="border-2 border-lime-500 px-10 py-16 text-start min-h-[320px] m-2 ">
      <h1 className="text-3xl"> {name}</h1>
      <p>{description}</p>
      <p className="text-xl font-bold">${price}</p>

      <button
        onClick={() => {
          addToCart(product);
        }}
        className="bg-teal-500 p-2 rounded-md hover:bg-blue-500"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
