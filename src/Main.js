import React, { useState } from "react";
import {LoginView} from "./LoginView";

export function Main(){

    const[isUserLoggedIn,setUserIsLoggedOn] = useState(false)

    return (

       <LoginView/>

    )


}