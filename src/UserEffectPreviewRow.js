import React,{ useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Trash } from 'react-bootstrap-icons';

export function UserEffectPreviewRow(props) {
    return (
        <tr>
            <td><Trash  onClick={props.deletefunc}/> </td>
            <td>{props.partNumber}</td>
            <td>{props.description}</td>
            <td>{props.partType}</td>
            <td>{props.size}</td>
        </tr>
    )
}
