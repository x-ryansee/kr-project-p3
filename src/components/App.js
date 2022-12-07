import { Switch } from "react-router-dom"
import { Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Home from "./pages/Home"
import About from "./pages/About";
import SongPage from "./SongPage";


function App() {
    return (
        <div className="app">
            <Switch>
                <Route path="/header">
                    <Header/>
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <SongPage />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
