import React, { useState } from "react";

const TodoInput = () => {
  const todoObj = {
    id: 1,
    content: "",
    isDone: false,
  };
  const [todo, setTodo] = useState(todoObj);

  const HandleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, content: e.target.value });
  };

  const onSubmitTodo = (e: any) => { 
    e.preventDefault();
    console.log("todo: ", todo);
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
