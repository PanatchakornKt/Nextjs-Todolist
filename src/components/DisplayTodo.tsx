import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todosState } from "@/components/AtomsState";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import DoneList from "@/components/DoneList";

const DisplayTodo: React.FC = () => {
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

  return (
    <>
      <Header />
      <TodoInput addTodo={addTodo} />
      <TodoList />
      <DoneList />
    </>
  );
};

export default DisplayTodo;
