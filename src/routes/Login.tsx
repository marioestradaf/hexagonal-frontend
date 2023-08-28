import { useState } from "react";
import { AuthUseCase } from "../modules/auth/application/AuthUseCase";
import AuthRepositoryImpl from "../modules/auth/infrastructure/AuthRespositoryImpl";

const authRepository = new AuthRepositoryImpl();
const authUseCase = new AuthUseCase(authRepository);

export default function Login() {
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
    authUseCase.login(inputFields.username, inputFields.password);
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