import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../../infrastructure/graphql/queries";

export default function Login(username: string, password: string) {
  const [login, { data }] = useMutation(LOGIN_MUTATION);
  
  async function handleLogin() {
    try {
      const response = await login({
        variables: {
          username,
          password,
        },
      });
      
      const token = response.data.login.token;
      
      // TODO: Save token to local storage or global state
    } catch (error) {
      // TODO: Handle error
    }
  }
  
  return {
    handleLogin,
  };
}
