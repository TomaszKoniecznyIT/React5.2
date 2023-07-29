import React from "react";

import Card from "../UI/Card";
import clasess from "./UsersList.module.css";

const UserList = (props) => {
  return (
    <Card className={clasess.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
