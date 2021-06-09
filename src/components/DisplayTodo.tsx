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
    const id = Math.random() * 1000;
    const data = {
      id,
      isDone: false,
      content: todo,
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
