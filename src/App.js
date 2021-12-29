import "./App.css";
import MyHeader from "./components/Header";
import AddInput from "./components/AddInput";
import { useState } from "react";
function App() {
  const [isInputShow, setIsInputShow] = useState(false)
  return <div className="App">
    <MyHeader
      openInput={() => setIsInputShow(!isInputShow)}
    />
    <AddInput
      isInputShow={isInputShow}
    />
  </div>;
}

export default App;
