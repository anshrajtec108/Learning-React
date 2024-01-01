import React, { useState, useContext } from "react";
import UserContext from "../usercontext"; // Correct import
import UsercontextProvider from "../userContext_provider"; // Correct import

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const { setuser } = useContext(UserContext);

  const handlesubmit = (e) => {
    e.preventDefault();
    setuser({ username, password });
  }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => { setusername(e.target.value) }} />
      <input type="text" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
}

export default Login;
