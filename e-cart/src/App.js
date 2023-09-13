import Items from "./Components/Items";
import Cart from "./Components/Cart";
function App() {
  return (
    <div className="App">
      <Items  name="Iphone" price={1000} />
      <Items  name="Shirt" price={500} />
      <Items  name="Laptop Bag" price={10} />
      <Cart />
    </div>
  );
}

export default App;
