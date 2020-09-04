import React, { useState } from "react";
import {LoginView} from "./LoginView";
import {NavBar} from'./NavBar'
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route
} from "react-router-dom";
import {ImportView} from "./ImportView";



export function Main() {

    console.log("In Main again")

    const [isUserLoggedIn, setUserIsLoggedOn] = useState(false)

    const handleLoginSubmit = (event) => {
        event.preventDefault()
        setUserIsLoggedOn(true)
    }

    return (
        <div>
            <NavBar isUserLoggedIn={isUserLoggedIn}/>
            <Router>
                <Switch>
                    {isUserLoggedIn ?
                        <Redirect to={"/"}/> :
                        <Route exact path="/login">
                            <LoginView handleLoginSubmit={(e) => handleLoginSubmit(e)} isUserLoggedIn={isUserLoggedIn}/>
                        </Route>
                    }
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