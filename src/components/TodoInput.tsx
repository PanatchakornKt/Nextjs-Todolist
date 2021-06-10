import React, { useState } from "react";
import { Button } from 'antd';

interface TodoInputProps {
  addTodo: string;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const onSubmitTodo = (e: TodoInputProps) => {
    e.preventDefault();
    if (todo.length === 0) {
      setError("Please add some to do.");
      alert(error);
    } else {
      addTodo(todo);
    }
  };

  return (
    <>
      <from>
        <input
          type="text"
          value={todo}
          placeholder="What do u want to do?"
          onChange={onInputChange}
          required
        />
        <Button type="submit" onClick={onSubmitTodo}>
          Add
        </Button>
      </from>
    </>
  );
};

export default TodoInput;
