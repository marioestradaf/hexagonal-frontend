import User from "../domain/User";
import UserRepository from "../domain/UserRepository";

export class UserUseCase {
  constructor(private userRepository: UserRepository) {}

  async getUser(userId: string): Promise<User | undefined> {
    return await this.userRepository.get(userId);
  }
}

// export function getUser(userRepository: UserRepository) {
// 	return async (userId: string): Promise<User | undefined> => {
// 		return await userRepository.get(userId);
// 	};
// }