import React, { useState } from "react";
import {LoginView} from "./LoginView";
import {NavBar} from'./NavBar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {ImportView} from "./ImportView";


export function Main(){

    const[isUserLoggedIn,setUserIsLoggedOn] = useState(false)

    return (
        <div>
            <NavBar/>
        <Router>
        <Switch>
            <Route exact path="/login">
                <LoginView/>
            </Route>
            <Route exact path="/">
                <div>Hello</div>
            </Route>
            <Route path="/add">
               <ImportView/>
            </Route>
            <Route path="/admin">
               <p>On my to do lis</p>
            </Route>
        </Switch>
        </Router>
        </div>

    )


}