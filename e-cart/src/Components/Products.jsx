import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/Cart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const cartContext = useContext(CartContext);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setProducts(result);
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      {products &&
        products.map((product) => (
          <div
            key={product.id}
            className="w-[300px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg h-36 w-full"
                src={product.image}
                alt=""
                width="80px"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white"></h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {product.description}
              </p>
              <button
                onClick={() =>
                  cartContext.setItems([...cartContext.items, product])
                }
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Price {product.price}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Products;
