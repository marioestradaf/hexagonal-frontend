import Auth from "../domain/Auth";
import AuthRepository from "../domain/AuthRepository";

export class AuthUseCase {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  public async login(username: string, password: string): Promise<Auth> {
    const user = await this.authRepository.login(username, password);
    console.log(user);
    return user;
  }
}