import React, { useState,Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/UsersList/UsersList';

const oldUsers = [
  {
    name: 'Sakebul islam',
    age: 20,
    id: Math.random().toString().slice(-5).concat('uid'),
  },
];

function App() {
  const [usersList, setUsersList] = useState(oldUsers);

  const addUserHandler = (uName, uAge) => {
    setUsersList(previousUsersList => {
      return [
        {
          name: uName,
          age: uAge,
          id: Math.random().toString().slice(-5).concat('uid'),
        },
        ...previousUsersList,
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
