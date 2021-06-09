import React from "react";
import { Todo } from "@/components/DisplayTodo";

interface DoneListProps {
  todos: Todo[];
}

const DoneList: React.FC<DoneListProps> = ({ todos }) => {

const todosDone = todos.filter((todo) => {
    return todo.isDone;
});

  return (
    <>
      <div>
        <h2>Done</h2>
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
