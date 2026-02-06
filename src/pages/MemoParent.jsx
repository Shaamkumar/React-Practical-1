import { useState } from "react";
import MemoExample from "./MemoExample";

function MemoParent(){
    const [count, setCount]=useState(0);

    return(
        <>
        <button onClick={()=>setCount(count+1)}>Click Count: {count}</button>
        <MemoExample name="S"/>
        </>
    );
}
export default MemoParent;