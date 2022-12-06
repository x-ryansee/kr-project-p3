import React, { useEffect } from "react";
import Header from "./Header";
import SongPage from "./SongPage";

function App() {

    useEffect(() => {
        fetch("http://localhost:3000/songs")
        .then((r) => r.json())
        .then(data => console.log(data))
      })
    

    return (
        <div className="app">
            <Header/>
            <SongPage/>
        </div>
    )
}

export default App;
