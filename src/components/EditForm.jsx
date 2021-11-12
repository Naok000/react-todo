import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Select,
  Button,
  FormControl,
  FormLabel,
  Stack,
} from "@chakra-ui/react";

export const EditForm = ({
  todo,
  setTodos,
  setShowEditForm,
  setEditTodo,
  editIndex,
  isOpen,
  onClose,
}) => {
  const { id, title, status } = todo;
  const [editId, setEditId] = useState(id);
  const [newTitle, setNewTitle] = useState(title);
  const [newStatus, setNewStatus] = useState(status);
  const saveEdit = () => {
    const newTodo = { id: editId, title: newTitle, status: newStatus };
    console.log(newTodo);
    setTodos((prevTodos) => {
      prevTodos[editIndex] = newTodo;
      return prevTodos;
    });
    setEditTodo("");
    setEditId("");
    setNewTitle("");
    setNewStatus("");
    setShowEditForm(false);
  };
  const statusOptions = [
    { value: "未着手", label: "未着手" },
    { value: "進行中", label: "進行中" },
    { value: "完了", label: "完了" },
  ];
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit To do</ModalHeader>
          <ModalBody>
            <FormControl action=''>
              <Stack>
                <FormLabel>タイトル</FormLabel>
                <Input
                  type='text'
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <FormLabel>ステータス</FormLabel>
                <Select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}>
                  {statusOptions.map((data, index) => (
                    <option key={index} value={data.value}>
                      {data.label}
                    </option>
                  ))}
                </Select>
              </Stack>
            </FormControl>
          </ModalBody>
          <ModalHeader>
            <Button onClick={saveEdit}>保存</Button>
          </ModalHeader>
        </ModalContent>
      </Modal>
    </>
  );
};
