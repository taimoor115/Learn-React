import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Lahore", "Karachi", "Multan", "Islamabad", "Sindh"];


  // Selected item event handler
  const handleSelectItem = (item: string) =>  {
    console.log(item);

  }
  return (
    <div>
      <ListGroup items={items} heading="Cities of Pakistan" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
