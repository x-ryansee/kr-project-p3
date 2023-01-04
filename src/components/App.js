import { Switch } from "react-router-dom"
import { Route } from "react-router-dom";
import React from "react";
import ShoppingCart from "./pages/ShoppingCart";
import Home from "./pages/Home"
import About from "./pages/About";
import MenuItem from "./MenuItem";


function App() {
    return (
        <div className="app">
            <Switch>
                <Route path="/shoppingCart">
                    <ShoppingCart/>
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/foods/:id">
                    <MenuItem />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
