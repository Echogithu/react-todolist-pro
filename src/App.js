import "./App.css";
import MyHeader from "./components/Header";
import AddInput from "./components/AddInput";
import { useState, useCallback } from "react";
function App() {
  const [isInputShow, setIsInputShow] = useState(false),
    [todoList, setTodoList] = useState([]);

  const addItem = useCallback((value) => {
    const dataItem = {
      id: new Date().getTime(),
      content: value,
      completed: false,
    };
    setTodoList((todoList) => [...todoList, dataItem]);
    setIsInputShow(false);
  }, []);

  return (
    <div className="App">
      <MyHeader openInput={() => setIsInputShow(!isInputShow)} />
      <AddInput isInputShow={isInputShow} addItem={addItem} />
    </div>
  );
}

export default App;
