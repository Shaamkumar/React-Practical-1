import { useCallback } from "react";

function CallBackExample(){
 const handleClick = useCallback(
    ()=>{
        console.log("Call Back Is Here Y Fear");
    },[]
 );

 return <button onClick={handleClick}>Click Me</button>
}
export default CallBackExample;