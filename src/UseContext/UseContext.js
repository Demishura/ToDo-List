import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    username: 'usuario',
    email: 'usuario@example.com',
  });

  const updateUser = (newUsername) => {
    setUser((prevUser) => ({ ...prevUser, username: newUsername }));
  };

  return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>;
};

const UserProfile = () => {
  const { user, updateUser } = useContext(UserContext);
  const [newUsername, setNewUsername] = useState('');

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleUpdateUsername = () => {
    updateUser(newUsername);
    setNewUsername('');
  };

  return (
    <div>
      <h2>Inicio de sesión</h2>
      <p>ID: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>

      <div>
        <label>Nuevo Username: </label>
        <input type="text" value={newUsername} onChange={handleUsernameChange} />
        <button onClick={handleUpdateUsername}>Actualizar</button>
      </div>
    </div>
  );
};

const UserDashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Pagina Principal</h2>
      <p>Bienvenido, {user.username}!</p>
    </div>
  );
};

export { UserProvider, UserProfile, UserDashboard };