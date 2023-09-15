import User from "./User";

export default interface UserRepository {
  get(id: string): Promise<User>;
  // saveToken(token: string): void;
  // getToken(): string | null;
};
