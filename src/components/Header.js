import React from "react";
import { Route, Link } from "react-router-dom";

function Header() {
    const handleClick = e => {
            console.log(`localhost:3001${e.target.id}`);

    }

    return (
        <header>
            <div>
                <Route to="/studymusic">
                    <Link to="/studymusic">
                        <h1 style={{color: "red"}} id="/studymusic" onClick={handleClick}>Study</h1>
                    </Link>
                </Route>
                <Route to="/partymusic">
                    <Link to="/partymusic">
                        <h1 style={{color: "blue"}} id="/partymusic" onClick={handleClick}>Party</h1>
                    </Link>
                </Route>
            </div>
        </header>
    )
}

export default Header;