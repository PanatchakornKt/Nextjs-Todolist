import React, { useState } from "react";

interface TodoInputProps {
  addTodo: string;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState<string>("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const onSubmitTodo = (e: TodoInputProps) => {
    e.preventDefault();
    addTodo(todo);
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
        <button type="submit" onClick={onSubmitTodo}>
          Add
        </button>
      </from>
    </>
  );
};

export default TodoInput;
