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
import Expandable from "./components/Expandable";
import Form from "./components/Form";
import ExpenseList from "./Expense-tracker/Components/ExpenseList";
function App() {
  // let items = ["Lahore", "Karachi", "Multan", "Islamabad", "Sindh"];

  // Exercise updating objects
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Taimoor",
    },
  });
  const handleChange = () => {
    setGame({ ...game, player: { ...game.player, name: "Qasim" } });
  };
  const [pizza, setPizza] = useState({
    name: "Saucy",
    topping: ["Mushroom"],
  });

  const handlePizza = () => {
    setPizza({ ...pizza, topping: [...pizza.topping, "Cheese"] });
  };
  const [items, setItems] = useState(["Potato", "Sugar"]);

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleOnCart = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
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

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utility" },
    { id: 2, description: "bbb", amount: 20, category: "Entertainment" },
    { id: 3, description: "ccc", amount: 10, category: "Utility" },
    { id: 4, description: "ddd", amount: 20, category: "Entertainment" },
  ]);

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

      {/* {color === false ? (
        <Heart color="red" onClick={handleOnClick} />
      ) : (
        <AiOutlineHeart size={40} onClick={handleOnClick} />
      )}

      <State /> */}
      {/* <State />
      <State /> */}
      {/*
      <Navbar cartItemCount={items.length} />
      <Cart cartItems={items} onClear={() => setItems([])} />

      <Expandable>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
        maiores ipsam perferendis! Quidem commodi reprehenderit aliquid optio
        eligendi a rerum, deleniti quam possimus. Quisquam ut accusantium,
        inventore vel, quas deleniti autem unde sint commodi provident totam
        iusto illum. Fugit dolorem et voluptas odio est explicabo aliquid id,
        aperiam adipisci sit facilis molestiae pariatur maiores omnis laudantium
        in veniam animi reprehenderit ea accusamus. Cumque tempora fuga esse!
        Consequatur ipsam, nemo modi doloribus autem similique, provident
        impedit libero vitae illo sequi incidunt tenetur voluptate quisquam
        labore, quod reiciendis quibusdam unde accusamus excepturi fuga
        exercitationem deserunt vel. Dicta cumque minus est. Accusantium,
        quisquam!
      </Expandable> */}

      {/* <Form /> */}

      <ExpenseList
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        expenses={expenses}
      />
    </>
  );
}

export default App;
