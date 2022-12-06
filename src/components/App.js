import React from "react";
import Header from "./Header";
import Search from "./Search"
import SongPage from "./SongPage";

function App() {
    return (
        <div className="app">
            <Header/>
            <Search/>
            <SongPage/>
        </div>
    )
}

export default App;
