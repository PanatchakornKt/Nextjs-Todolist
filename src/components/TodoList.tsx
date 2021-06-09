import React from "react";
import { Todo } from "@/components/DisplayTodo";

interface TodoListProps {
  todos: Todo[];
  setTodos: string;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  const todosInProgress = todos.filter((todo) => {
    return !todo.isDone;
  });

  const updateCheckedItem = (todo: Todo) => {
    todo.isDone = !todo.isDone;
    todos[todo.id] = todo;
    setTodos([...todos]);
  };

  return (
    <>
      <div>
        <h2>Todo</h2>
        <ul>
          {todosInProgress.map((todo) => {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  defaultChecked={todo.isDone}
                  onChange={(e) => {
                    updateCheckedItem(todo);
                  }}
                />
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
