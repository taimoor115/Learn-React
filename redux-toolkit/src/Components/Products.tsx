import { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/productSlice";

export interface Products {
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, [dispatch]);

  const handleAdd = (product: Products) => {
    dispatch(add(product));
  };
  return (
    <div className="productWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="card image" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
