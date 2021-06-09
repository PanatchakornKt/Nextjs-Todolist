import { atom } from "recoil";

const todosState = atom({
  key: "todosState",
  default: [],
});
export { todosState };
