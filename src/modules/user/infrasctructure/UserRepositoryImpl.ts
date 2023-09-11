// import { useQuery } from "@apollo/client";
// import { USER_QUERY } from "../../../infrastructure/graphql/queries";
import User from "../domain/User";
import UserRepository from "../domain/UserRepository";

const MOCKED_USER: User = {
  id: "f7d67f13-b2f3-48c8-a210-758a2333316b",
  name: "John Doe from UserUseCase",
  email: "john.doe@example.com",
  token: "bGFsaWx1bGVsby5sYWxpbHVsZWxv"
}

export default class UserRepositoryImpl implements UserRepository {
  private cache: Map<string, User> = new Map();

  constructor() {
    // Retrieve the cached data from localStorage, if available
    // Should be implemented as another Infra adaptaer
    const cachedData = localStorage.getItem('usercache');
    this.cache = new Map<string, User>(cachedData ? JSON.parse(cachedData) : []);
  }

  async get(id: string): Promise<User> {
    if (this.cache.has(id)) {
      return this.cache.get(id) as User;
    }

    // Logic to fetch a user by ID from API or database

    // const { data } = useQuery(USER_QUERY, {
    //   variables: {
    //     id,
    //   },
    // });

    // Example returning a fake user:
    const user = new User(MOCKED_USER.id, MOCKED_USER.name, MOCKED_USER.email, MOCKED_USER.token);
    // const user = new User(data.user.id, data.user.name, data.user.email, data.user.token);

    this.cache.set(id, user);

    // Update the data in localStorage
    localStorage.setItem('usercache', JSON.stringify(Array.from(this.cache)));

    return user
  }

  // saveToken(token: string): void {
  //   localStorage.setItem(MOCKED_USER.token, token);
  // }

  // getToken(): string | null {
  //   return localStorage.getItem(MOCKED_USER.token);
  // }
}
