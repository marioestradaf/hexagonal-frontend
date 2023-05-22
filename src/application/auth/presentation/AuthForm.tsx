import Login from "../usecases/Login";
import Auth from "../../../domain/auth/Auth";
import { useState } from "react";

export default function AuthForm() {
  const [inputFields, setInputFields] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFields(state => {
      return ({ ...state, [event.target.name]: event.target.value });
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    Login(inputFields.username, inputFields.password);
  }
  
  return (
    // TODO: Add container styling
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={inputFields.username} onChange={handleChange} />
        <input type="password" name="password" value={inputFields.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}