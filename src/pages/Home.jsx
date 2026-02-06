import React from "react";
import {useNavigate} from "react-router-dom";

function Home(){
const navigate = useNavigate();

const goToAbout =()=>{
    navigate("/page");
};
return(
    <div>
        <h2>Home Page</h2>
        <button onClick={goToAbout}>Go TO About Page</button>
    </div>
);
}

export default Home;