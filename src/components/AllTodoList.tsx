import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todosState } from "@/components/AtomsState";
import { Checkbox, Space, Input } from "antd";
import { TodoProps } from "./Types";

const { Search } = Input;

const AllTodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  const [keyword, setKeyword] = useState<string>("");

  let search = todos.filter((todo: TodoProps) => {
    return todo.content.indexOf(keyword) !== -1;
  });

  const handleDelete = (todo: TodoProps) => {
    if (todos.length > 0) {
      setTodos(todos.filter((item) => item.id !== todo.id));
    }
  };

  return (
    <>
      <div>
        <Space direction="vertical">
          <Search
            placeholder="Search your todo here..."
            onChange={(e) => setKeyword(e.target.value)}
            style={{ width: 400 }}
            allowClear
          />
        </Space>
        <ul className="mt-4">
          {search.map((todo) => {
            return (
              <div key={todo.id} className="mb-2">
                <label>
                  <Checkbox defaultChecked={todo.isDone} disabled />
                </label>
                <label className="pl-5">{todo.content}</label>
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
