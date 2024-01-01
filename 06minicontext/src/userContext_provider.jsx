// userContext_provider.jsx
import React, { useState } from "react";
import UserContext from "./usercontext";

const UsercontextProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setuser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UsercontextProvider;
