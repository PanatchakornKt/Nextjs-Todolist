import React, { useState } from "react";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import DoneList from "@/components/DoneList";

export interface ITodo {
  id: string;
  content: string;
  isDone: boolean;
}

export class Todo implements ITodo {
  id: string;
  content: string;
  isDone: boolean;

  constructor(content: string = "", isDone: boolean = false) {
    this.id = Math.random() * 1000;
    this.content = content;
    this.isDone = isDone;
  }
}

const DisplayTodo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo: Todo) => {
    setTodos([todo, ...todos]);
  };

  return (
    <>
      <Header />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
      <DoneList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default DisplayTodo;
