import "./App.css";
import MyHeader from "./components/Header";
import AddInput from "./components/AddInput";
import { useState, useCallback, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import CheckModal from "./components/Modal/CheckModal";
import EditModal from "./components/Modal/EditModal";
import NoDataTip from "./components/Modal/NoDataTip";

function App() {
  const [isInputShow, setIsInputShow] = useState(false),
    [isShowCheckModal, setShowCheckModal] = useState(false),
    [isShowEditModal, setShowEditModal] = useState(false),
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
      _setCurrentData(todoList, id);
      setShowCheckModal(true);
    },
    [todoList]
  );

  const completedItem = useCallback((id) => {
    setTodoList((todoList) =>
      todoList.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  }, []);

  const openEditModal = useCallback(
    (id) => {
      _setCurrentData(todoList, id);
      setShowEditModal(true);
      console.log(isShowEditModal);
    },
    [todoList]
  );

  function _setCurrentData(todoList, id) {
    setCurrentData(() => todoList.filter((item) => item.id === id)[0]);
  }

  const submitEdit = useCallback((newData, id) => {
    setTodoList((todoList) =>
      todoList.map((item) => {
        if (item.id === id) {
          item = newData;
        }
        return item;
      })
    );
    setShowEditModal(false);
  }, []);

  const deleteItem = useCallback((id) => {
    setTodoList((todoList) => todoList.filter((item) => item.id !== id));
  }, []);

  return (
    <div className="App">
      <CheckModal
        data={currentData}
        isShowCheckModal={isShowCheckModal}
        closeModal={() => setShowCheckModal(false)}
      />
      <EditModal
        data={currentData}
        isShowEditModal={isShowEditModal}
        closeModal={() => setShowEditModal(false)}
        submitEdit={submitEdit}
      />
      <MyHeader openInput={() => setIsInputShow(!isInputShow)} />
      <AddInput isInputShow={isInputShow} addItem={addItem} />
      {!todoList || todoList.length === 0 ? (
        <NoDataTip />
      ) : (
        <ul className="todo-list">
          {todoList.map((item, index) => {
            return (
              <TodoItem
                data={item}
                key={index}
                openCheckModal={openCheckModal}
                openEditModal={openEditModal}
                completedItem={completedItem}
                deleteItem={deleteItem}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
