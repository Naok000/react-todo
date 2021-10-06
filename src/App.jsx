import React, { useState } from "react";

import { TodoList } from "./components/TodoList";
import "./stylesheets/index.css";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("未着手");

  const [limit, setLimit] = useState("");

  const unCreateTodo = title === "" || body === "";

  const statusOptions = [
    { value: "未着手", label: "未着手" },
    { value: "進行中", label: "進行中" },
    { value: "完了", label: "完了" },
  ];

  const addTodo = (e) => {
    e.preventDefault();
    const todo = { title, body, status };
    const todoLength = todos.length;
    const id = todoLength === 0 ? 1 : todos[todoLength - 1].id + 1;
    setTodos([...todos, { id, ...todo }]);
    setTitle("");
    setBody("");
  };
  return (
    <>
      <div className='ui  container'>
        <h1 className='ui huge header'>My To do</h1>
        <form action='' className='ui form'>
          <div className='field'>
            <label>タイトル</label>
            <input
              type='text'
              name='title'
              placeholder='Enter a title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='field'>
            <label>内容</label>
            <textarea
              rows='2'
              name='body'
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            {statusOptions.map((data, index) => (
              <option key={index} value={data.value}>
                {data.label}
              </option>
            ))}
          </select>
          <button onClick={addTodo} disabled={unCreateTodo} className='addBtn'>
            Add ToDo
          </button>
        </form>
        <div className='todo-list'>
          <h2 className='ui header task'>To do task</h2>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
};
