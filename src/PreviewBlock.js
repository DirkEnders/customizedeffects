import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {UserEffectPreviewTable} from './UserEffectPreviewTable'

export function PreviewBlock (prop) {

    return (

        <div>
            <UserEffectPreviewTable effectArr = {prop.effectArr} />

        </div>
    )
}