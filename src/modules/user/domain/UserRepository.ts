import User from "./User";

export default interface UserRepository {
  findById(id: string): Promise<User>;
  saveToken(token: string): void;
  getToken(): string | null;
};
