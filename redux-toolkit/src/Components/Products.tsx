import { useEffect, useState } from "react";

interface Products {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number };
  title: string;
}
const Products = () => {
  const [products, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="productWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="card image" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
