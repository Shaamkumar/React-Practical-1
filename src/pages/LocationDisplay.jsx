import React from "react";
import { useLocation } from "react-router-dom";

function LocationDisplay() {
    const location = useLocation();

    return (
        <div>
            <p>Current Location: {location.pathname}</p>
            <p><strong>Search :</strong> {location.search}</p>
            <p><strong>Hash :</strong> {location.hash}</p>
            <p><strong>State: </strong> {JSON.stringify(location.state)}</p>
        </div>
    );
}

export default LocationDisplay;