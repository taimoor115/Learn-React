import "./App.css";
import './style.css'
import Header from "./components/Header";
import Button from "./components/Button";
import TodoItem from "./components/TodoItem";
import CounterComponent from "./components/CounterComponent";
function App() {
  return (
    <div className="top-container">
      <CounterComponent />
      <Header header={'Todoie App'} />
      <TodoItem text={'Eat'} completed/>
      <TodoItem text={'Code'} />
      <TodoItem text={'Play'}/>
      <TodoItem text={'Study'}/>
      <TodoItem text={'Sleep'}/>
      <Button />
    </div>
  );
}

export default App;
