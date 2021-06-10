import React from "react";
import { useRecoilState } from "recoil";
import { todosState } from "@/components/AtomsState";

const AllTodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const handleDelete = (todo: TodoProps) => {
    if (todos.length > 0) {
      setTodos(todos.filter((item) => item.id !== todo.id));
    }
  };

  return (
    <>
      <div>
        <ul className="mt-2">
          {todos.map((todo) => {
            return (
              <div key={todo.id} className="mb-2">
                {todo.content}
                <label className="text-xs text-gray-400 pl-10">
                  Add on : {todo.date}
                </label>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default AllTodoList;
