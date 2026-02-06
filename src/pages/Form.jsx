
import { useState } from "react";

export default function Form(){
    const [name, setName]= useState("");

    const submit =e=>{
        e.preventDefault();
        console.log(name);
    };

    return (
        <form onSubmit={submit}>
            <input value={name} onChange={ e => setName(e.target.value)}/>
            <button>Submit</button>
        </form>
    );
}