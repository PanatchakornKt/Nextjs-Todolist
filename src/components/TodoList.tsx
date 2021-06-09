import React from "react";

const TodoList = () => {
  const todos = [
    {
      id: Math.random() * 1000,
      content: "Do Homework",
      isDone: true,
    },
    {
      id: Math.random() * 1000,
      content: "Play game",
      isDone: false,
    },
  ];

  return (
    <>
      <div>
      <h2>Todo</h2>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <input type="checkbox" defaultChecked={todo.isDone} />
                {todo.content}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
