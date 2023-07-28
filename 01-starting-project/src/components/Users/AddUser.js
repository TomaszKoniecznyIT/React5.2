import React from "react";

const AddUser = (promps) => {
  return (
    <form>
      <leble htmlFor="username">Username</leble>
      <import id="username" type="text"></import>
      <leble htmlFor="age ">Age (Years)</leble>
      <import id="age" type="number"></import>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
