import User from "./User";

export default interface UserRepository {
  // ...
  findById(id: string): Promise<User>;
}