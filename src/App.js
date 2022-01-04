import "./App.css";
import MyHeader from "./components/Header";
import AddInput from "./components/AddInput";
import { useState, useCallback, useEffect } from "react";
import TodoItem from "./components/TodoItem";
function App() {
  const [isInputShow, setIsInputShow] = useState(false),
    [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem("todoList"));
    setTodoList(todoData);
  }, []);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList])

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
      <ul className="todo-list">
        {todoList.map((item, index) => {
          return <TodoItem data={item} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default App;
