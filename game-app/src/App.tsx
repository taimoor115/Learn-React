import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button1 from "./components/Button/Button1"
import Button from "./components/Button";
import { useState } from "react";
import { AiFillCalendar } from 'react-icons/ai'
import { ReactNode } from "react";
function App() {
  let items = ["Lahore", "Karachi", "Multan", "Islamabad", "Sindh"];

  // Selected item event handler
  const handleSelectItem = (item: string) =>  {
    console.log(item);
  }
  const [alert, setAlert] = useState(false);

  const handleClick = () => {
    setAlert(true);
  };

  return (
    <>

      <Button1  children="Hello" color="primary" onClick={() => console.log('Clicked')
      } />
      {/* <AiFillCalendar color="grey" size={40} /> */}
      {/* {alert == true && <Alert onClick={() => setAlert(false)} />} */}

      {/* <Button text={"Change Button"} color={"secondary"} onClick={handleClick} /> */}
      {/* <ListGroup items={items}  heading="Cities of Pakistan" onSelectItem={handleSelectItem}/> */}
    </>
  );
}

export default App;
