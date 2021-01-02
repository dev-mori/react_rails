import React from "react";
import ReactDOM from "react-dom";
import User from "./User";
import Form from "./Form";
import Todo from "./Todo";

export default function Home() {
  return (
    <>
      <User />
      <Form />
      <Todo />
    </>
  );
}

ReactDOM.render(<Home />, document.getElementById("root"));
