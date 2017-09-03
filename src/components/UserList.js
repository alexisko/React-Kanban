import React from 'react';
import UserItem from './UserItem.js';

const UserList = ({ users }) => {
  return (
    <ul>
      {
        users.map((user) => {
          return (
            <UserItem name={user} />
          )
        })
      }
    </ul>
  );
};

export default UserList;