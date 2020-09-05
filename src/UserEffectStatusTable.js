import React,{ useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Trash } from 'react-bootstrap-icons';



export function UserEffectStatusTable(props) {

    const [finaleEffectsArr, setFinaleEffects] = useState(props.effectArr)

   useEffect(() => {
        setFinaleEffects(props.effectArr);
    }, [props.effectArr]);

    const deleteEffectRow = (pPartNumber) => {
        const afterdelete = finaleEffectsArr.filter(effect => pPartNumber !== effect.partNumber)
        setFinaleEffects(afterdelete)
    }




    const  renderTableData = () =>{
        return finaleEffectsArr && finaleEffectsArr.map((effect) =>{
            return (
                /*
                <UserEffectPreviewRow {...effect} deletefunc={() => deleteEffectRow(effect.partNumber) } />
                */
                <tr key={effect.partNumber}>
                    <td><Trash onClick={() => deleteEffectRow(effect.partNumber)}/></td>
                    <td>{effect.partNumber}</td>
                    <td>{effect.description}</td>
                    <td>{effect.partType}</td>
                    <td>{effect.size}</td>
                    <td>{effect.status}</td>
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
                            <th width="10%">Status</th>
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