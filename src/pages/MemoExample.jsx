import React from "react";
function MemoExample({name}){
console.log("Rendering", name);
return <div>{name}</div>
}
export default React.memo(MemoExample);