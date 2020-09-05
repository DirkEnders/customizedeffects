import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {PasteComponent} from "./PasteComponent";


export function PasteBlock(props){

    return (
        <div>
            <span>
                Mark effects in the Finale 3D effect window and press ctrl-C to copy it.<br />
                Then paste it in the block below  by pressing ctrl-v .
            </span>
            <PasteComponent callbackHandlePaste = {props.callbackHandlePaste}/>
        </div>
    )
}