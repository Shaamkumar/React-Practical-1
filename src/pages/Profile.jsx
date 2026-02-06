import { useContext } from "react";
import { AppContext } from "./Context";

function Profile() {
  const user = useContext(AppContext);

  return <h1>Hello {user}</h1>;
}

export default Profile;
