import React,{ useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {UserEffectPreviewRow} from './UserEffectPreviewRow'


export function UserEffectPreviewTable(props) {

    const [finaleEffectsArr, setFinaleEffects] = useState([])

    useEffect(() => {

        let newParts = props.effectArr.map(effect => effect.partNumber)
        let cleanarr = finaleEffectsArr.filter(effect => !newParts.includes(effect.partNumber))

        setFinaleEffects(props.effectArr.concat(cleanarr))
    }, []);



    const deleteEffectRow = (pPartNumber) => {
        const afterdelete = finaleEffectsArr.filter(effect => pPartNumber !== effect.partNumber)
        setFinaleEffects(afterdelete)
    }


    const  renderTableData = () =>{
        return finaleEffectsArr && finaleEffectsArr.map((effect) =>{
            return (
                <UserEffectPreviewRow {...effect} deletefunc={() => deleteEffectRow(effect.partNumber) } />
                /*<tr key={partNumber}>
                    <td><img src="Trash-empty-icon.png" alt="Delete" onClick={() => deleteEffectRow(partNumber)}/></td>
                    <td>{partNumber}</td>
                    <td>{description}</td>
                    <td>{ftype}</td>
                </tr>*/
            )
        })
    }

    return (
        <div>
            {finaleEffectsArr.length > 0 ?
                <div>
                    <table className="table table-striped table-bordered table-sm">
                        <thead>
                        <tr>
                            <th>Action</th>
                            <th width="12%">Part Number</th>
                            <th width="60%">Description</th>
                            <th width="10%">Type</th>
                            <th width="10%">Size</th>
                        </tr>
                        </thead>
                        <tbody>
                            {renderTableData()}
                        </tbody>
                    </table>

                </div>:
                null
            }
        </div>
    )

}