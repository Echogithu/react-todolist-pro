import "./App.css";
import MyHeader from "./components/Header";
import AddInput from "./components/AddInput";
import { useState, useCallback, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import CheckModal from "./components/Modal/CheckModal";

function App() {
  const [isInputShow, setIsInputShow] = useState(false),
    [isShowCheckModal, setShowCheckModal] = useState(false),
    [todoList, setTodoList] = useState([]),
    [currentData, setCurrentData] = useState({});

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem("todoList"));
    setTodoList(todoData);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addItem = useCallback((value) => {
    const dataItem = {
      id: new Date().getTime(),
      content: value,
      completed: false,
    };
    setTodoList((todoList) => [...todoList, dataItem]);
    setIsInputShow(false);
  }, []);

  const openCheckModal = useCallback(
    (id) => {
      console.log(`ssss`)
      setCurrentData(() => todoList.filter((item) => item.id === id)[0]);
      setShowCheckModal(true);
    },
    [todoList]
  );

  return (
    <div className="App">
      <CheckModal
        data={currentData}
        isShowCheckModal={isShowCheckModal}
        closeModal={() => setShowCheckModal(false)}
      />
      <MyHeader openInput={() => setIsInputShow(!isInputShow)} />
      <AddInput isInputShow={isInputShow} addItem={addItem} />
      <ul className="todo-list">
        {todoList.map((item, index) => {
          return (
            <TodoItem data={item} key={index} openCheckModal={openCheckModal} />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
