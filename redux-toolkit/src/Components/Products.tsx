import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { Product, STATUSES, fetchProducts } from "../store/productSlice";
import { RootState } from "../store/store";

const Products = () => {
  const { data: products, status } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = (product: Product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) return <h3>Loading.....</h3>;
  if (status === STATUSES.ERROR) return <h3>Something went wrong!</h3>;
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
