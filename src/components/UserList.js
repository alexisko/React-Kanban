import React from 'react';
import UserItem from './UserItem.js';

const UserList = ({ users }) => {
  return (
    <ul>
      {
        users.map((user) => {
          return (
            <UserItem username={user} />
          )
        })
      }
    </ul>
  );
};

export default UserList;