import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../../infrastructure/graphql/mutations";
import Auth from "../domain/Auth";
import AuthRepository from "../domain/AuthRepository";

const MOCKED_AUTHORISED_USER: Auth = {
  id: "f7d67f13-b2f3-48c8-a210-758a2333316b",
  name: "John Doe",
  email: "john.doe@example.com",
  token: "bGFsaWx1bGVsby5sYWxpbHVsZWxv"
}

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
    
    return new Auth(MOCKED_AUTHORISED_USER);

    // const [loginMutation] = useLoginMutation(username, password);
    // const { data } = await loginMutation();

    // if (data && data.login) {
    //   return new Auth(data.login.token);
    // } else {
    //   throw new Error('Login failed');
    // }
  }
}
