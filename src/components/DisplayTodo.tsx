import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Descriptions, Divider } from "antd";
import { todosState } from "@/components/AtomsState";
import Headers from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import AllTodoList from "@/components/AllTodoList";
import TodoList from "@/components/TodoList";
import DoneList from "@/components/DoneList";
import Header from "@/components/Header";

const DisplayTodo = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const addTodo = (todo: string) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const date = new Date();
    const year = new Intl.DateTimeFormat("en", { year: "2-digit" }).format(
      date
    );
    const month = new Intl.DateTimeFormat("en", { month: "short" }).format(
      date
    );
    const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    const time = new Intl.DateTimeFormat("en", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
    const dateTime = `${month} ${day}, ${year}, ${time}`;
    const data = {
      id,
      isDone: false,
      content: todo,
      date: dateTime,
    };
    setTodos([data, ...todos]);
  };

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    saveLocal();
  }, [todos]);

  const saveLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let Local = JSON.parse(localStorage.getItem("todos"));
      setTodos(Local);
    }
  };

  return (
    <>
      <div>
        <Headers />
      </div>
      <div className="pl-12 pr-12">
        <div className="mb-4">
          <TodoInput addTodo={addTodo} />
          <Divider orientation="left">TodoList Board</Divider>
          <Descriptions layout="vertical" bordered>
            <Descriptions.Item label="All Todo List.">
              <AllTodoList />
            </Descriptions.Item>
          </Descriptions>
        </div>
        <Descriptions layout="vertical" bordered>
          <Descriptions.Item label="Todos in progress.">
            <TodoList />
          </Descriptions.Item>
          <Descriptions.Item label="Todos done.">
            <DoneList />
          </Descriptions.Item>
        </Descriptions>
      </div>
    </>
  );
};

export default DisplayTodo;
