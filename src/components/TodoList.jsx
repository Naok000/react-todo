import React, { useState } from "react";

import { Todo } from "./Todo";

export const TodoList = ({ todos, setTodos }) => {
  return (
    <>
      <div>
        <ul>
          {todos.map((todo, index, todos) => (
            <Todo key={index} todo={todo} todos={todos} setTodos={setTodos} />
          ))}
        </ul>
      </div>
    </>
  );
};
