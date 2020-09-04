import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import pastehere from "./PasteHere.png"


export function PasteComponent(props){

    var sectionStyle = {
        width: "100%",
        height: "400px",
        backgroundImage: `url(${pastehere})`
    };

    return (
        <div className="border border-success ">
            <div  style={sectionStyle} contentEditable={true} onPaste={props.callbackHandlePaste} className="border-success"/>
        </div>
    )


}