import React from "react";
import { useRecoilState } from "recoil";
import { todosState } from "@/components/AtomsState";
import { Todo } from "@/components/DisplayTodo";

const DoneList = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const todosDone = todos.filter((todo) => {
    return todo.isDone;
  });

  const handleClearAll = () => {
    setTodos([]);
  };

  return (
    <>
      <div>
        <h2>Done</h2>
        <button onClick={() => handleClearAll()}>Clear All</button>
        <ul>
          {todosDone.map((todo) => {
            return (
              <li key={todo.id}>
                <input type="checkbox" defaultChecked={todo.isDone} disabled />
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
