import { useMutation } from "@apollo/client";
import Auth from "../../domain/auth/Auth";
import { LOGIN_MUTATION } from "../../infrastructure/graphql/mutations";
import AuthRepository from "../../domain/auth/AuthRepository";

const MOCKED_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export function useLoginMutation(username: string, password: string) {
  return useMutation(LOGIN_MUTATION, {
    variables: {
      username,
      password
    },
  });
}

export default class AuthRepositoryImpl implements AuthRepository {
  async login(username: string, password: string): Promise<Auth> {
    
    return new Auth(MOCKED_TOKEN);

    // 
    // const [loginMutation] = useLoginMutation(username, password);
    // const { data } = await loginMutation();

    // if (data && data.login) {
    //   return new Auth(data.login.token);
    // } else {
    //   throw new Error('Login failed'); // Handle login failure case
    // }
  }
}
