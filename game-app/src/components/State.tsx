import produce from "immer";
// State
// 1. Update state asynchronusly due to performance enhancement in this way we minimize the render of extra elements
// 2. State is stored outside the components
// 3. Use hooks is top of the component

// Best Practices
// 1.Avoid redundent of the state variables
// 2.Group related variables in an object
// 3.Avoid deeply nested structures

// Pure Function
// Pure function is a function that always produces the same output for the
// same input and has no side effects.
// In pure function declartion and initializer is in the same function

// In react pure function is used for the performance enhancement. In react a function/component is
// pure if we provide props it returns same jsx each time if it so then react skip the
// rerendering again and again
import { useState } from "react";
const State = () => {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");

  const [bugs, setBugs] = useState([
    { id: 1, title: "bug1", fixed: false },
    { id: 2, title: "bug2", fixed: false },
  ]);

  const handleBugObject = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  const [greet, setGreet] = useState([
    { id: 1, name: "Qasim" },
    { id: 2, name: "Taimoor" },
    { id: 3, name: "Usman" },
  ]);

  const [drink, setDrink] = useState({
    title: "Pepsi",
    price: 5,
    statement: "Hey Qaim Click me Plz",
  });

  const [person, setPerson] = useState({
    firstName: "Taimoor",
    lastName: "Hussain",
    address: {
      place: "Amir Town",
      zipCode: 5001,
    },
  });

  const handleClick = () => {
    // const newDrink = {
    //   title : 'Coke',
    //   price : 6,
    // }

    setDrink({ ...drink, statement: "2 rupee ki pepsi Qaim apna ****" });
    // setDrink(newDrink);
  };

  const [arr, setArr] = useState(["Hello", "Bye"]);

  const handleClickEvent = () => {
    // Add elements
    // setArr([...arr, "Why"]);

    // Remove Elements
    // setArr(arr.filter((arr) => arr !== "Bye"));

    //Update

    setArr(arr.map((arr) => (arr === "Bye" ? "Changed" : arr)));
  };
  const handleOnClick = () => {
    setPerson({ ...person, address: { ...person.address, zipCode: 5004 } });
  };
  // {let count = 0;
  // count++;}
  return (
    <>
      {/* const [person, serPerson] = useState([ firstName : ' ', lastName : ' ', */}
      {/* ]); */}
      {/* <div>{"Message " + count}</div> */}

      {/* Modify Object */}
      <button onClick={handleClick}>{drink.statement}!</button>
      <button onClick={handleClickEvent}>{arr}</button>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <button onClick={handleBugObject}>{"Click Me !!"}</button>
    </>
  );
};

export default State;
