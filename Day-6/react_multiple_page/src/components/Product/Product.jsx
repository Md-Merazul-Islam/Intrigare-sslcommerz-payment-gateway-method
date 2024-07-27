import React from "react";

const Product = ({ product }) => {
  const discountedPrice = product.price - (product.price * product.discountPercentage / 100);
  const hasDiscount = product.discountPercentage > 0;


  return (
    <div className="text-center p-4">
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="mx-auto max-w-96 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <img
            className="min-h-40  w-full object-cover object-center bg-slate-300"
            src={product.images}
            alt="Product Image"
          />
          <div className="p-4">
            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
              {product.title}
            </h2>
            <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
              {product.description.slice(0, 50)}{product.description.length > 50 ? "..." : ""}
            </p>
            <div className="flex items-end">
              <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                ${hasDiscount ? discountedPrice.toFixed(2) : product.price}
              </p>
              {hasDiscount && (
                <>
                  <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {product.discountPercentage}% off
                  </p>
                </>
              )}
            </div>
            <div className="flex flex-col items-start">
              <p className="text-base text-gray-900 dark:text-white">
                Category: {product.category}
              </p>
              <p className="text-base text-gray-900 dark:text-white">
                Brand: {product.brand}
              </p>
              <p className="text-base text-gray-900 dark:text-white">
                SKU: {product.sku}
              </p>
              <p className="text-base text-gray-900 dark:text-white">
                Stock: {product.stock}
              </p>
              <p className="text-base text-gray-900 dark:text-white">
                Weight: {product.weight}g
              </p>
              <p className="text-base text-gray-900 dark:text-white">
                Dimensions: {product.dimensions.width} x {product.dimensions.height}
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
