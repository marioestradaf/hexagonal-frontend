import Auth from "../../../domain/auth/Auth";
import AuthRepository from "../../../domain/auth/AuthRepository";
import AuthRepositoryImpl from "../../../infrastructure/auth/AuthRespositoryImpl";

const authRepository: AuthRepository = new AuthRepositoryImpl();

/**
 * Performs a login operation with the provided credentials.
 * 
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {boolean} Returns true if the login is successful, otherwise false.
 * @throws {Error} Throws an error if the login process encounters an issue.
*/ 
export default async function Login(username: string, password: string): Promise<Auth> {
  const response = await authRepository.login(username, password);
  console.log(response);
  return response;
}

