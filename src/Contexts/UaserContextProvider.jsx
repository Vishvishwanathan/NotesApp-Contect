import React, { useContext, useState } from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [note, setNote] = useState([]);
    const [task, setTask] = useState([]);
    const [trash, setTrash] = useState([]);
    const [user, setUser] = useState(null);

    const registerUser = (userData) => {
      // You can add any additional logic here to handle the user data
      setUser(userData);
    };

    const contextValue = {
        note, 
        setNote,
        trash,
        setTrash,
        task,
        setTask,
        user,
        registerUser


    }
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    ) 
}

export default UserContextProvider;

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };