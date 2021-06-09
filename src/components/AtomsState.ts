import { atom } from "recoil";

const todoState = atom({
  key: "todoState",
  default: "",
});
export { todoState };

const todosState = atom({
  key: "todosState",
  default: [],
});
export { todosState };
