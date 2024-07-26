import React from 'react';
import SingleCart from '../SingleCart/SingleCart';

const Placement = ({ cart }) => {
    console.log(cart);
    return ( 
        <div className='border-2 border-blue-300  '>
            <h1 className='text-3xl'>Placement</h1>
            <div>
                {
                    cart.map(singleCart =>
                        <SingleCart key={singleCart.id} singleCart={singleCart}></SingleCart>
                    )
                }
            </div>
        </div>
    )
}

export default Placement;
