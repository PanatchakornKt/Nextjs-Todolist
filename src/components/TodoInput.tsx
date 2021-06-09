import React from "react";

const TodoInput = () => {
  return (
    <>
      <from>
        <input
          type="text"
          name="todo"
          value=""
          placeholder="What do u want to do?"
        />
        <button type="submit">Add</button>
      </from>
    </>
  );
};

export default TodoInput;
