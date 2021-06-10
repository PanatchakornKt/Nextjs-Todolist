import React from "react";
import { useRecoilState } from "recoil";
import { todosState } from "@/components/AtomsState";
import { TodoProps } from "@/components/Types";
import { DeleteOutlined } from "@ant-design/icons";
import { Space, Card, Checkbox } from "antd";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const todosInProgress = todos.filter((todo: TodoProps) => {
    return !todo.isDone;
  });

  const handleDelete = (todo: TodoProps) => {
    if (todos.length > 0) {
      setTodos(todos.filter((item) => item.id !== todo.id));
    }
  };

  const updateCheckedItem = (todo: TodoProps) => {
    if (todos.length > 0) {
      setTodos(
        todos.map((item) => {
          if (item.id === todo.id) {
            return {
              ...item,
              isDone: !item.isDone,
            };
          }
          return item;
        })
      );
    }
  };

  return (
    <>
      {" "}
      <ul>
        {todosInProgress.map((todo) => {
          return (
            <li key={todo.id} className="mb-2">
              <Space direction="vertical">
                <Card style={{ width: 500 }}>
                  <div>
                    <Checkbox
                      defaultChecked={todo.isDone}
                      onClick={() => {
                        updateCheckedItem(todo);
                      }}
                    />
                    {(" ", " ")}
                    <label className="ml-4">{todo.content}</label>
                    <label className="ml-4">
                      {" "}
                      <DeleteOutlined
                        onClick={() => {
                          handleDelete(todo);
                        }}
                      />
                    </label>
                  </div>
                  <label className="text-gray-400 text-xs ml-9">
                    Updated on : {todo.date}
                  </label>
                </Card>
              </Space>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
