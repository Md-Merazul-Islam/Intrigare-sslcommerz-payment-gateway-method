import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='grid border-2  border-red-300 gap-3 xl:grid-cols-3 md:grid-cols-2'>
            {
                products.map(product =>
                    <Product key={product.id} product={product} addToCart={addToCart}></Product>
                )
            }
        </div>
    )
}

export default Products;
