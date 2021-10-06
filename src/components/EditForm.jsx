import React, { useState } from "react";

export const EditForm = ({ todo, setTodos, setShowEditForm }) => {
  const { id, title, status } = todo;
  const [newTitle, setNewTitle] = useState(title);
  const [newStatus, setNewStatus] = useState(status);
  const saveEdit = () => {
    const newTodo = { id: id, title: newTitle, status: newStatus };
    // console.log(newTodo);
    setTodos((prevTodos) => {
      prevTodos[id - 1] = newTodo;
      console.log(prevTodos);
      return prevTodos;
    });
    setShowEditForm(false);
  };
  const statusOptions = [
    { value: "未着手", label: "未着手" },
    { value: "進行中", label: "進行中" },
    { value: "完了", label: "完了" },
  ];
  return (
    <>
      <div>
        <input
          type='text'
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <select
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}>
          {statusOptions.map((data, index) => (
            <option key={index} value={data.value}>
              {data.label}
            </option>
          ))}
        </select>
        <button onClick={saveEdit}>保存</button>
      </div>
    </>
  );
};
