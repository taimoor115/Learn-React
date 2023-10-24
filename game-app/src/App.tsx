import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Heart from "./components/Heart";
import Button1 from "./components/Button/Button1";
import Button from "./components/Button";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ReactNode } from "react";
import State from "./components/State";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
function App() {
  // let items = ["Lahore", "Karachi", "Multan", "Islamabad", "Sindh"];

  const [items, setItems] = useState(["Potato", "Sugar"]);

  // Selected item event handler
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alert, setAlert] = useState(false);

  const handleClick = () => {
    setAlert(true);
  };

  const [color, setColor] = useState(false);

  const handleOnClick = () => {
    setColor((prev) => !prev);
  };
  return (
    <>
      {/* <Button1
        children="Hello"
        color="primary"
        onClick={() => console.log("Clicked")}
      /> */}
      {/* <AiFillCalendar color="grey" size={40} /> */}
      {/* {alert == true && <Alert onClick={() => setAlert(false)} />} */}

      {/* <Button text={"Change Button"} color={"secondary"} onClick={handleClick} /> */}
      {/* <ListGroup items={items}  heading="Cities of Pakistan" onSelectItem={handleSelectItem}/> */}

      {color === false ? (
        <Heart color="red" onClick={handleOnClick} />
      ) : (
        <AiOutlineHeart size={40} onClick={handleOnClick} />
      )}

      <State />
      {/* <State />
      <State /> */}

      <Navbar cartItemCount={items.length} />
      <Cart cartItems={items} onClear={() => setItems([])} />
    </>
  );
}

export default App;
