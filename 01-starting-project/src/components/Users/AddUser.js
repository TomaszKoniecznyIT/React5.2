import React from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (promps) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <leble htmlFor="username">Username</leble>
        <input id="username" type="text"></input>
        <leble htmlFor="age ">Age (Years)</leble>
        <input id="age" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
