import React from "react";
import { Route } from "react-router-dom";

function Header() {
    const handleClick = e => {
            console.log(e.target.id);

    }

    return (
        <header>
            <div>
                <Route to="./studymusic">
                    <h1 style={{color: "red"}} id="/studymusic" onClick={handleClick}>Study</h1>
                </Route>
                    <h1 style={{color: "blue"}} id="/partymusic" onClick={handleClick}>Party</h1>
            </div>
        </header>
    )
}

export default Header;