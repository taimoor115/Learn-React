import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
import { RootState } from "../store/store";

const Cart = () => {
  const products = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId: number) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.items.map((product) => (
          <div className="cartCart" key={product.id}>
            <img src={product.image} alt="img" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
