import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
function App() {
  // let items = ["Lahore", "Karachi", "Multan", "Islamabad", "Sindh"];

  // Selected item event handler
  // const handleSelectItem = (item: string) =>  {
  //   console.log(item);

  // }
  return (
    <div>
      <Alert>
        <span>Hello</span>
        <div>World</div>
      </Alert>
      {/* <ListGroup items={items} heading="Cities of Pakistan" onSelectItem={handleSelectItem}/> */}
    </div>
  );
}

export default App;
