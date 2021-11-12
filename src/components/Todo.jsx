import React, { memo } from "react";
import { Box, Tr, Td, Stack, Button } from "@chakra-ui/react";

export const Todo = memo(
  ({
    index,
    todo,
    todos,
    setTodos,
    setShowEditForm,
    setEditTodo,
    setIndex,
    onOpen,
  }) => {
    console.log(index);
    const deleteTodo = (targetTodo) => {
      setTodos(todos.filter((todo) => todo !== targetTodo));
    };
    const editHandleTodo = (targetTodo) => {
      setEditTodo(targetTodo);
      setIndex(index);
      setShowEditForm(true);
      onOpen();
    };

    return (
      <>
        <Tr>
          <Td>{todo.id}</Td>
          <Td>{todo.title}</Td>
          {/* <p>{todo.body}</p> */}
          <Td>{todo.status}</Td>
          <Td>
            <Stack direction='row' spacing={4}>
              <Button
                size='sm'
                colorScheme='red'
                onClick={() => deleteTodo(todo)}>
                削除
              </Button>
              <Button
                size='sm'
                colorScheme='teal'
                onClick={() => editHandleTodo(todo)}>
                編集
              </Button>
            </Stack>
          </Td>
        </Tr>
      </>
    );
  }
);
