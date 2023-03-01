import "./App.css";
import Counter from "./Components/Counter";
import ToDoList from "./Components/ToDoList";
import Weather from "./Components/Weather/Weather";
function App() {
  return (
    <div className="App">
      <Counter initialValue={0} /> 
      <hr></hr>
      <ToDoList />
      <hr></hr>
      <Weather/>
    </div>
  );
}
export default App;
