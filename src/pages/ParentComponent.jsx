import { useState, useCallback } from "react";
import Button from "./Button";

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handel = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Set Count: {count}</button>
      <Button onClick={handel} />
    </>
  );
}

export default ParentComponent;