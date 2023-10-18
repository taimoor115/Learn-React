import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Lahore", "Karachi", "Multan", "Islamabad", "Sindh"];
  return (
    <div>
      <ListGroup items={items} heading="Cities of Pakistan" />
    </div>
  );
}

export default App;
