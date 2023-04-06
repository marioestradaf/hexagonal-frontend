import { useQuery } from "@apollo/client";
import User from "../../domain/user/User";
import { USER_QUERY } from "../../infrastructure/graphql/queries";
import UserRepository from "../../domain/user/UserRepository";

export default class UserRepositoryImpl implements UserRepository {
  async findById(id: string): Promise<User> {
    // Implement the logic to fetch a user by ID from your backend API or database
    // Here"s an example of how you could return a dummy user:
    return new User("1", "John Doe", "john.doe@example.com", "dummy-token");
    
    const { data } = useQuery(USER_QUERY, {
      variables: {
        id,
      },
    });
    
    const user = new User(data.user.id, data.user.name, data.user.email, data.user.token);
    
    return user;
  }
}
