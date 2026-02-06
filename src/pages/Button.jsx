import React from "react";

function Button({onClick}){
    console.log("Button Rendering");
    return <button onClick={onClick}>Click Me Part 2</button>;

}
export default React.memo(Button);