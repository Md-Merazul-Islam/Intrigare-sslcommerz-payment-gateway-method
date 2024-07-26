import React from "react";

const SingleCart = ({ singleCart }) => {
    const { name, description, price } = singleCart;

    return (
        <div className=" ">
            <div className="border-2 m-7 border-red-400 px-10 py-16 text-start min-h-[320px] ">
                <h1 className="text-3xl"> {name}</h1>
                <p>{description}</p>
                <p className="text-xl font-bold">${price}</p>
            </div>
        </div>
    );
};

export default SingleCart;
