import React, { useState } from "react";
import { EditForm } from "./EditForm";

import "../stylesheets/Todo.css";

export const Todo = ({ todo, todos, setTodos }) => {
  const [editTodo, setEditTodo] = useState([]);
  const [isShowEditForm, setShowEditForm] = useState(false);
  const deleteTodo = (targetTodo) => {
    setTodos(todos.filter((todo) => todo !== targetTodo));
  };
  const editHandleTodo = (targetTodo) => {
    setEditTodo(targetTodo);
    console.log(editTodo);
    setShowEditForm(true);
  };
  return (
    <>
      {isShowEditForm ? (
        <>
          <EditForm
            todo={editTodo}
            setTodos={setTodos}
            setShowEditForm={setShowEditForm}
          />
        </>
      ) : (
        <li>
          <div className='todo'>
            <p className='todo-title'>{todo.title}</p>
            {/* <p>{todo.body}</p> */}
            <p className='todo-status'>{todo.status}</p>

            <button className='deleteBtn' onClick={() => deleteTodo(todo)}>
              削除
            </button>
            <button className='editBtn' onClick={() => editHandleTodo(todo)}>
              編集
            </button>
          </div>
        </li>
      )}
    </>
  );
};
