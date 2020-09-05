import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export function ImportMenue(props){

    let but1;
    let but2;
    let but3;

    if (props.step === 1) {
        but1 = <button className="btn-info p-5l ">Paste Data</button>
        but2 = <button className="btn-secondary p-5l disabled">Preview Data</button>
        but3 = <button className="btn-secondary p-5l disabled">Send effects to FINALE 3D</button>
    }
    if (props.step === 2) {
        but1 = <button className="btn-secondary p-5l" onClick={props.callbackButtonOne}>Paste Data</button>
        but2 = <button className="btn-info p-5l">Preview Data</button>
        but3 = <button className="btn-primary p-5l" onClick={props.callbackButtonThree}>Send effects to FINALE 3D</button>
    }

    if (props.step === 3 ){
        but1 = <button className="btn-primary p-5l" onClick={props.callbackButtonOne}>Paste Data</button>
        but2 = <button className="btn-secondary p-5l disabled">Preview Data</button>
        but3 = <button className="btn-info p-5l disabled" onClick={props.callbackButtonThree}>Send effects to FINALE 3D</button>
    }

    return (
        <div>
            {but1} > {but2} > {but3}
        </div>
    )


}