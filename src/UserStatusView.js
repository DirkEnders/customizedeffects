import React , {useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {UserEffectStatusTable} from "./UserEffectStatusTable"



export function UserStatusView() {

    const [effects, setEffects] = useState([])

    useEffect(() => {
        var savedItems = localStorage.getItem('items')
        console.log ("Try to load saved items")
        if (savedItems) {
            console.log("Transfer them into arr")
             let items = JSON.parse(savedItems)
            console.log("and get these Items",items)
            setEffects(items)
        }
    },[])

    return (
        <UserEffectStatusTable effectArr={effects}/>
    )
}