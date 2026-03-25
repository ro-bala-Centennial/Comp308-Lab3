import Signup from "./components/Signup";
import Login from "./components/Login";

export default function App() {
  const logout = () => {
    localStorage.removeItem("token");
    alert("Logged out");
  };

  return (
    <div>
      <h1>Authentication</h1>
      <Login />
      <hr />
      <Signup />
      <hr />
      <button onClick={logout}>Logout</button>
    </div>
  );
}