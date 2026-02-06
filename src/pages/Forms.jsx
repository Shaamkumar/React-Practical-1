import { useState } from "react";

export default function Forms(){

    const [data , setData]= useState();

    const handlechange = e => setData({ ...data, [e.target.name]: e.target.value});

    const handleSubmit = e => {
        e.preventDefault();
        console.log(data);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input name="name" onChange={handlechange}/>
            <input name="Email" onChange={handlechange}/>
            <input name="Msage" onChange={handlechange}/>
            <button>Submit</button>
        </form>
    );
}