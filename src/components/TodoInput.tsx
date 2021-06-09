import React, { useState } from "react";
import { Todo } from "@/components/DisplayTodo";

interface TodoInputProps {
  addTodo: string;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const todoObj: Todo = new Todo();
  const [todo, setTodo] = useState(todoObj);

  const HandleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, content: e.target.value });
  };

  const onSubmitTodo = (e: string) => {
    e.preventDefault();
    console.log("todo: ", todo);
    addTodo(todo);
    setTodo(todoObj);
  };

  return (
    <>
      <from>
        <input
          type="text"
          name="todo"
          value={todo.content}
          placeholder="What do u want to do?"
          onChange={HandleTodoChange}
        />
        <button type="submit" onClick={onSubmitTodo}>
          Add
        </button>
      </from>
    </>
  );
};

export default TodoInput;
