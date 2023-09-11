import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { UserUseCase } from "../modules/user/application/GetUser";
import User from "../modules/user/domain/User";
import UserRepository from "../modules/user/domain/UserRepository";
import UserRepositoryImpl from "../modules/user/infrasctructure/UserRepositoryImpl";

export async function UserPageLoader({ params }: LoaderFunctionArgs) {
  const userRepository = new UserRepositoryImpl as UserRepository;
	const userUseCase = new UserUseCase(userRepository);

  return await userUseCase.getUser(params.id ?? "");
}

export default function UserPage() {
 const user = useLoaderData() as Awaited<User>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
