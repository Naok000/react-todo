import React, { useState } from "react";
import {
  ChakraProvider,
  Stack,
  Heading,
  Box,
  Select,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

import { TodoList } from "./components/TodoList";

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
    <ChakraProvider>
      <Box>
        <Heading pt={2} m={2}>
          My To do
        </Heading>
        <FormControl p={2} action=''>
          <Stack>
            <Box>
              <FormLabel>タイトル</FormLabel>
              <Input
                type='text'
                name='title'
                placeholder='Enter a title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Box>
            <Box>
              <FormLabel>内容</FormLabel>
              <Input
                name='body'
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </Box>
            <Select value={status} onChange={(e) => setStatus(e.target.value)}>
              {statusOptions.map((data, index) => (
                <option key={index} value={data.value}>
                  {data.label}
                </option>
              ))}
            </Select>
            <Button
              onClick={addTodo}
              disabled={unCreateTodo}
              className='addBtn'>
              Add ToDo
            </Button>
          </Stack>
        </FormControl>
        <Box pt={4}>
          <Heading size='lg' m={2}>
            To do task
          </Heading>
          <TodoList todos={todos} setTodos={setTodos} />
        </Box>
      </Box>
    </ChakraProvider>
  );
};
