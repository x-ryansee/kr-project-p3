import React from "react";
import Header from "./Header";
import Search from "./Search"
import SongContainer from "./SongContainer";

function App() {
    return (
        <div className="app">
            <Header/>
            <Search/>
            <SongContainer/>
        </div>
    )
}

export default App;
