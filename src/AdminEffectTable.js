import React,{ useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Trash} from "react-bootstrap-icons";


export function AdminEffectTable(props) {

    const [finaleEffectsArr, setFinaleEffects] = useState(props.effectArr)

    const deleteEffectRow = (pPartNumber) => {
        const afterdelete = finaleEffectsArr.filter(effect => pPartNumber !== effect.partNumber)
        setFinaleEffects(afterdelete)
    }

    const copyToClipboard = (pPartNumber) => {
        const theEffect = finaleEffectsArr.filter(effect => pPartNumber === effect.partNumber)
        console.log("Kopiere das VDL ",theEffect[0].vdl)
    }

    const insertIntoInventory = (pPartNumber) => {
        //const theEffect = finaleEffectsArr.filter(effect => pPartNumber === effect.partNumber)
        console.log("Talk to inventory api here ...... ")
    }

    useEffect(() => {
        setFinaleEffects(props.effectArr);
    }, [props.effectArr]);



    const  renderTableData = () =>{
        return finaleEffectsArr && finaleEffectsArr.map((effect) =>{
            return (
                <tr key={effect.partNumber}>
                    <td><Trash onClick={() => deleteEffectRow(effect.partNumber)}/></td>
                    <td>{effect.partNumber}</td>
                    <td>{effect.description}</td>
                    <td>{effect.partType}</td>
                    <td>{effect.size}</td>
                    <td><button onClick={() => copyToClipboard(effect.partNumber)}>Copy VDL</button></td>
                    <td>
                        <select>
                            <option value="new -unchecked" key="new">New-Unchecked</option>
                            <option value="Denied" key="denied">Denied</option>
                            <option value="Imported in 3D" key="Imported in 3D">Imported into 3D</option>
                        </select>
                    </td>
                    <td>
                        <button onClick={() => insertIntoInventory(effect.partNumber)}>Add to Inventory</button>
                    </td>
                </tr>
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
                                <th width="50%">Description</th>
                                <th width="10%">Type</th>
                                <th width="10%">Size</th>
                                <th colSpan="3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableData()}
                        </tbody>
                    </table>

                </div>:
                <p> No effect data is available from you !</p>
            }
        </div>
    )



}