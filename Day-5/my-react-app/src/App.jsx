import { useState } from "react";

import "./App.css";
import DataFetech from "./components/DataFetch/DataFetech";
import Products from "./components/Products/Products";
import Placement from "./components/Placement/Placement";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div>
      <DataFetech></DataFetech>
      <div className="flex gap-x-7 pt-20">
        <div className="lg:w-9/12 md:w-8/12 ">
          <Products addToCart={addToCart}></Products>
        </div>
        <div className="lg:w-3/12  md:w-4/12">
          <Placement cart={cart}></Placement>
        </div>
      </div>
    </div>
  );
}

export default App;
