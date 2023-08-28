import GetUser from "../modules/user/application/GetUser";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import User from "../modules/user/domain/User";

export async function UserPageLoader({ params }: LoaderFunctionArgs) {

  const user = await GetUser(params.id ?? "");

  return user
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