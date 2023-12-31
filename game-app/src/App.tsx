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
import ExpenseFilter from "./Expense-tracker/Components/ExpenseFilter";
import ExpenseForm from "./Expense-tracker/Components/ExpenseForm";
import categories from "./Expense-tracker/Components/categories";
import Effect from "./components/Effect";
import ProductList from "./ProductList";
import Fetch from "./components/Fetch";
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

  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 10, category: "Groceries" },
    { id: 2, description: "Movie", amount: 500, category: "Entertainment" },
    { id: 3, description: "TV", amount: 300, category: "Utility" },
    { id: 4, description: "Games", amount: 20, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const [chooseCategory, setChooseCategory] = useState("");
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

      {/* <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        // expenses={expenses}
        expenses={visibleExpenses}
      /> */}
      {/* <Effect /> */}
      {/* <select
        className="form-select"
        onChange={(event) => setChooseCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Housing">Housing</option>
      </select>
      <ProductList category={chooseCategory} /> */}

      {/* <Fetch /> */}
    </>
  );
}

export default App;
