import React from "react";

import "./index.scss";

function TodoItem(props) {
  const { data, openCheckModal, openEditModal, completedItem, deleteItem } = props;
  return (
    <li className="todo-item">
      <div className="check-box">
        <input type="checkbox" checked={DataTransfer.completed} onChange={() => completedItem(data.id)}/>
        <span className="content">{data.content}</span>
      </div>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={() => openCheckModal(data.id)}>查看</button>
        <button className="btn btn-warning" onClick={() => openEditModal(data.id)}>编辑</button>
        <button className="btn btn-danger" onClick={() => deleteItem(data.id)}>删除</button>
      </div>
    </li>
  );
}

export default TodoItem;
