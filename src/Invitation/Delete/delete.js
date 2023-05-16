import React, { useState } from "react";

const Empty = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const addUser = () => {
    if (newUser !== "") {
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      setNewUser("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addUser();
    }
  };

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <button onClick={() => deleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newUser}
        onChange={(event) => setNewUser(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default Empty;