import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todosState } from "@/components/AtomsState";
import { TodoProps } from "@/components/Types";
import { Button, Input, Form } from "antd";

interface TodoInputProps {
  addTodo: string;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [todos, setTodos] = useRecoilState(todosState);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const onSubmitTodo = (e: TodoInputProps) => {
    e.preventDefault();
    if (todo.length === 0) {
      setError("Please add some Todo.");
      alert(error);
    } else {
      addTodo(todo);
    }
    setTodo("");
  };

  const handleDelete = (todo: TodoProps) => {
    if (todos.length > 0) {
      setTodos([]);
    }
  };

  return (
    <>
      <Form>
        <Input
          type="text"
          style={{ width: 300 }}
          placeholder="What do you write in a Todo list ?"
          onChange={onInputChange}
          value={todo}
          allowClear
        />
        <Button type="submit" onClick={onSubmitTodo}>
          Add
        </Button>
        <Button danger type="submit" onClick={handleDelete}>
          Delete All Todo
        </Button>
      </Form>
    </>
  );
};

export default TodoInput;
