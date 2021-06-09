import React from "react";
//import { useRecoilValue } from "recoil";
//import { todosState } from "@/components/AtomsState";
import { Todo } from "@/components/DisplayTodo";

interface TodoListProps {
  todos: Todo[];
  setTodos: string;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  //const todos = useRecoilValue(todosState);

  const todosInProgress = todos.filter((todo) => {
    return !todo.isDone;
  });

  const onDelete = (id: string) => {
    console.log("delter");
    //setTodos(todosInProgress.filter((todo) => todo.id !== id));
  };

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
                <button onClick={onDelete}>Deleted</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
