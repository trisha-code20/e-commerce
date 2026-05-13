function Home({ setCart }) {

  const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
   image: "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 2000,
   image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"
  }
];

  return (
    <div>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>Shop best products at best prices</p>
    </div>
      <h1>Products</h1>

      {products.map((item) => (
        <div key={item.id} className="card">
        <img src={item.image} alt={item.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} /> 
          <h3>{item.name}</h3>
          <p>₹{item.price}</p><button onClick={() => alert("Proceeding to payment...")}>
      Buy Now
      </button>
          <button onClick={() => 
  setCart((prev) => [...prev, { ...item, quantity: 1 }])
}>
  Add to Cart
</button>
        </div>
      ))}
    </div>
  );
}

export default Home;