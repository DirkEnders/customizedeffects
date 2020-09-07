import React , {useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {AdminEffectTable} from "./AdminEffectTable"

export function AdminView() {

    const [effects, setEffects] = useState([])

    useEffect(() => {
        var savedItems = localStorage.getItem('items')
        if (savedItems) {
             let items = JSON.parse(savedItems)
            setEffects(items)
        }
    },[])

    return (
        <div>
            <p>TODO: Add some filters for users and status here !</p>
            <AdminEffectTable effectArr={effects}/>
        </div>
    )
}