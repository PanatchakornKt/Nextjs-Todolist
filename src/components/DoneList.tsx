import React from "react";
import { useRecoilState } from "recoil";
import { todosState } from "@/components/AtomsState";
import { TodoProps } from "@/components/Types";
import { Space, Card } from "antd";
import { Button } from "antd";

const DoneList = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const todosDone = todos.filter((todo: TodoProps) => {
    return todo.isDone;
  });

  const handleClearAll = (todo: TodoProps) => {
    if (todos.length > 0) {
      setTodos(
        todos.filter((todo) => {
          return !todo.isDone;
        })
      );
    }
  };

  return (
    <>
      <div>
        <h2>
          Todo Done{" "}
          <Button danger onClick={() => handleClearAll()}>
            Clear All
          </Button>
        </h2>
        <br />
        <ul>
          {todosDone.map((todo) => {
            return (
              <li key={todo.id} className="mb-2">
                <Space direction="vertical">
                  <Card style={{ width: 500 }}>
                    <p>
                      <input
                        type="checkbox"
                        defaultChecked={todo.isDone}
                        disabled
                      />{" "}
                      {todo.content}
                    </p>
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

export default DoneList;
