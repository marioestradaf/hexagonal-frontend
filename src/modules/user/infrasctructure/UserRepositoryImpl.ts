// import { useQuery } from "@apollo/client";
// import { USER_QUERY } from "../../../infrastructure/graphql/queries";
import User from "../domain/User";
import UserRepository from "../domain/UserRepository";

const TOKEN_KEY = 'user_token';

export default class UserRepositoryImpl implements UserRepository {
  async findById(id: string): Promise<User> {
    // Logic to fetch a user by ID from API or database
    // Example returning a fake user:
    return new User("1", "John Doe", "john.doe@example.com", "1234dummy-token");

    // const { data } = useQuery(USER_QUERY, {
    //   variables: {
    //     id,
    //   },
    // });

    // const user = new User(data.user.id, data.user.name, data.user.email, data.user.token);

    // return user;
  }

  saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }
}
