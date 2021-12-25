import React from "react";
// add any needed imports here
import { useSelector } from 'react-redux'

function Users() {
  const users = useSelector(state => state.users)
  const usernames = users.map(user => user.username).join(', ')

  return (
    <div>
      <ul>
        Users!
        {usernames}
        Total Users: {users.length}
      </ul>
    </div>
  );
}

export default Users;
