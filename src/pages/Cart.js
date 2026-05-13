function Cart({ cart, removeFromCart, increaseQty, decreaseQty }) {
    const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
  return (
    <div>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => decreaseQty(index)}>-</button>

<span> {item.quantity} </span>

<button onClick={() => increaseQty(index)}>+</button>

            <button onClick={() => removeFromCart(index)}>
             Remove
            </button>
          </div>
        ))
      )}
      <h2>Total: ₹{total}</h2>
      <h2>Total items: {cart.length}</h2>
    </div>
  );
}

export default Cart;