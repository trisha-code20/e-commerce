import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const increaseQty = (index) => {
  setCart((prev) =>
    prev.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decreaseQty = (index) => {
  setCart((prev) =>
    prev.map((item, i) =>
      i === index && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};
  const removeFromCart = (indexToRemove) => {
  setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
};
  return (
    <BrowserRouter>
    <Navbar /> 
      <Routes>
  <Route path="/" element={<Home setCart={setCart} />} />
  <Route
  path="/cart"
  element={
    <Cart
      cart={cart}
      removeFromCart={removeFromCart}
      increaseQty={increaseQty}
      decreaseQty={decreaseQty}
    />
  }
/>
  <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;