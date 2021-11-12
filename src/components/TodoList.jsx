import React, { useState, memo } from "react";
import {
  Box,
  Table,
  Tr,
  Thead,
  Th,
  Tbody,
  useDisclosure,
} from "@chakra-ui/react";

import { EditForm } from "./EditForm";
import { Todo } from "./Todo";

export const TodoList = memo(({ todos, setTodos }) => {
  const [editTodo, setEditTodo] = useState([]);
  const [editIndex, setIndex] = useState(0);
  const [isShowEditForm, setShowEditForm] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <React.Fragment>
      {isShowEditForm ? (
        <EditForm
          todo={editTodo}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          setShowEditForm={setShowEditForm}
          isOpen={isOpen}
          onClose={onClose}
          editIndex={editIndex}
        />
      ) : (
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>タイトル</Th>
              <Th>ステータス</Th>
              <Th></Th>
            </Tr>
          </Thead>
          {todos.map((todo, index, todos) => (
            <Tbody key={index}>
              <Todo
                index={index}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                setShowEditForm={setShowEditForm}
                setEditTodo={setEditTodo}
                setIndex={setIndex}
                onOpen={onOpen}
              />
            </Tbody>
          ))}
        </Table>
      )}
    </React.Fragment>
  );
});
