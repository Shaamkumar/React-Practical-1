import { useState, useMemo } from "react";

function expencivecalculation(num){
    console.log("Running Expencive Calculation");
    let result =0;
    for(let i=0;i<1000000000;i++){
        result += num;
    }
    return result;
}

function MemoComputation(){
    const [count , setCount]=useState(0);
    const [dark, setDark]=useState(false);

    const expnsiveValue =useMemo(()=>{
    return expencivecalculation(count);},[count]);

    const theme={
        color: dark? "#eee" : "black",
        backgroundColor: dark? "black" : "#eee",
        padding: "20px",
        marginTop: "10px"
    };

    return(

        <>
        <h3>Reaslt: {expnsiveValue}</h3>
        <button onClick={()=> setCount(count+1)}>Increment Count</button>
        <button onClick={()=> setDark(!dark)}>Theme Changer</button>

        <div style={theme}>Hi my Name Is Shaam</div>        
        </>
    );
}

export default MemoComputation;