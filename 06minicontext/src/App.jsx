import UsercontextProvider from "./userContext_provider";
import "./App.css";
import Login from "./compountents/login";
import Profile from "./compountents/profile";
function App() {
  return (
    <UsercontextProvider>
      <h1>context </h1>
      <Login />
      <Profile />
    </UsercontextProvider>
  );
}

export default App;
