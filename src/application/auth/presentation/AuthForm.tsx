import { useState } from "react";
import Login from "../usecases/Login";

export default function AuthForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const { handleLogin } = Login(username, password);
  
  function handleSubmit(event: any) {
    event.preventDefault();
    handleLogin();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}