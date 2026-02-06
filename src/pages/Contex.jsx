import { useContext } from "react";
import { AppContext } from "./Context";

function Contex() {
  const user = useContext(AppContext);

  return <h1>Hello {user}</h1>;
}

export default Contex;
