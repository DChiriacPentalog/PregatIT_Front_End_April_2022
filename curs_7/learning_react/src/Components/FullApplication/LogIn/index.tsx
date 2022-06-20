import { useContext } from "react";
import { AuthenticationContext } from "../authentication";

export default function LogIn() {
  const { logIn } = useContext(AuthenticationContext);

  return <button onClick={logIn}>Log in with Google</button>;
}
