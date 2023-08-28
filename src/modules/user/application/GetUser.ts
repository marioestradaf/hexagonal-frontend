
import UserRepositoryImpl from "../infrasctructure/UserRepositoryImpl";
import User from "../domain/User";
import UserRepository from "../domain/UserRepository";

const userRepository: UserRepository = new UserRepositoryImpl();

export default async function GetUser(id: string): Promise<User> {
  return await userRepository.findById(id);
};
