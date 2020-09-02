import React, { useState } from "react";
import {LoginView} from "./LoginView";
import {NavBar} from'./NavBar'

export function Main(){

    const[isUserLoggedIn,setUserIsLoggedOn] = useState(false)

    return (
        <div>
            <NavBar/>
            <LoginView/>
        </div>

    )


}