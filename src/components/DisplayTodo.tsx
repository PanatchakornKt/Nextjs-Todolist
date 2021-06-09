import React, { useState } from "react";
//import { useRecoilState } from "recoil";
//import { todosState } from "@/components/AtomsState";
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

const DisplayTodo: React.FC = () => {
  const [todos, setTodos] = useState([]);
  //const [todos, setTodos] = useRecoilState(todosState);

  const addTodo = (todo: Todo) => {
    setTodos([todo, ...todos]);
  };

  return (
    <>
      <Header />
      <TodoInput addTodo={addTodo} />
      <TodoList setTodos={setTodos} todos={todos} />
      <DoneList setTodos={setTodos} todos={todos} />
      {/* <TodoList />
      <DoneList /> */}
    </>
  );
};

export default DisplayTodo;
