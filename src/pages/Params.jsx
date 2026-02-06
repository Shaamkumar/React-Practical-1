import React from "react";

import { BrowserRouter as Router, Route,Routes,useParams } from "react-router-dom";

function Params(){
    let {id} = useParams();
    return(
        <div style={{fontSize:"50px"}}>
            Now Showing post {id}
        </div>
    );
}

export default Params;
