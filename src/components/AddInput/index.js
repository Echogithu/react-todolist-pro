import React, { useRef } from "react";

import "./index.scss";

function AddInput(props) {
  const { isInputShow, addItem } = props,
    inputRef = useRef();

  const submitValue = () => {
    const inputValue = inputRef.current.value.trim();

    if (inputValue.length === 0) {
      return;
    }
    addItem(inputValue);
    inputRef.current.value = "";
  };

  return (
    <>
      {isInputShow ? (
        <div className="input-wrapper">
          <input type="text" ref={inputRef} placeholder="请输入待办事件" />
          <button className="btn btn-primary" onClick={submitValue}>
            添加
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AddInput;
