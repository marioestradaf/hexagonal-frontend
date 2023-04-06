
import UserRepositoryImpl from "../../../infrastructure/user/UserRepositoryImpl";
import User from "../../../domain/user/User";
import UserRepository from "../../../domain/user/UserRepository";

const userRepository: UserRepository = new UserRepositoryImpl();

export default async function GetUser(id: string): Promise<User> {
  return await userRepository.findById(id);
}