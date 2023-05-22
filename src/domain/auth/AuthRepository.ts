import Auth from "./Auth";

export default interface AuthRepository {
  login(username: string, password: string): Promise<Auth>;
}