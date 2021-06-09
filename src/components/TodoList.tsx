import React from "react";
import { useRecoilState } from "recoil";
import { todosState } from "@/components/AtomsState";
import { Todo } from "@/components/DisplayTodo";
import { TodoProps } from "@/components/Types";
import { DeleteOutlined } from "@ant-design/icons";
import { Space, Card } from "antd";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const todosInProgress = todos.filter((todo) => {
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
      <div>
        <h2>Todo</h2>
        <br />
        <ul>
          {todosInProgress.map((todo) => {
            return (
              <li key={todo.id} className="mb-2">
                <Space direction="vertical">
                  <Card style={{ width: 500 }}>
                    <input
                      type="checkbox"
                      defaultChecked={todo.isDone}
                      onClick={() => {
                        updateCheckedItem(todo);
                      }}
                    />{" "}
                    {todo.content}
                    <br />
                    <label className="text-gray-400 text-xs">
                      Add on : {todo.date}
                    </label>
                    <DeleteOutlined
                      onClick={() => {
                        handleDelete(todo);
                      }}
                    />
                  </Card>
                </Space>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
