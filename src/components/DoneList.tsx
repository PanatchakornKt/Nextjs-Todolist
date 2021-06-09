import React from "react";

const DoneList = () => {

  const todos = [
    {
      id: Math.random() * 1000,
      content: "Do Homework",
      isDone: true,
    },
    {
      id: Math.random() * 1000,
      content: "Play game",
      isDone: true,
    },
  ];

  return (
    <>
      <div>
        <h2>Done</h2>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <input type="checkbox" defaultChecked={todo.isDone} disabled/>
                {todo.content}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default DoneList;
