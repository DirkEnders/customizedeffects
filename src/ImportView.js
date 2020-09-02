import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {ImportMenue} from "./ImportMenue"
import {PasteBlock} from "./PasteBlock"
import {PreviewBlock} from "./PreviewBlock"

export function ImportView() {

    const [step, setStep] = useState(1)
    const [effekte, setEffects] = useState([])
    const [warning, setWarning] = useState(false)

    const resetToStepOne = () => {
        console.log("reset ")
        setStep(1)
    }

    const handlePaste = (e) => {
        console.log("in parse")
        if (e === undefined) return
        console.log("Parse Text in funk ",e.clipboardData.getData('Text'))
        var effectText = e.clipboardData.getData('Text')
        if (effectText.length > 0) {
            var lines           = effectText.split("\n")
            var headerLine      = lines[0]
            var headerFieldsArr = headerLine.split('\t')
            var effectArr       = [] /* copy into new array */
            lines               = lines.splice(1)

            if (headerFieldsArr[0] !== "##partsHeader") {
                console.log("Falsche paste")
                setWarning(true)
                return
            }

            for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
                var effectValuesArr = lines[lineIndex].split('\t')
                var effectObj       = {}

                for (let headerIndex = 0; headerIndex < headerFieldsArr.length; headerIndex++) {
                    // Not all cols are needed - skip some to make object smarter
                    if (headerFieldsArr[headerIndex].indexOf("#") !== -1 ) continue
                    if ("insertButton used quota qoh remainingQuota remainingQoh remainingAvailable available stdLocation".indexOf(headerFieldsArr[headerIndex]) !== -1 )continue

                    console.log("Feld "+headerFieldsArr[headerIndex])

                    effectObj[headerFieldsArr[headerIndex]] = effectValuesArr[headerIndex]
                    if (headerFieldsArr[headerIndex] === "partNumber") {
                        effectObj["key"]=effectValuesArr[headerIndex]
                    }
                }

                if (typeof effectObj.partNumber !== "undefined") {
                    effectArr.push(effectObj)
                }
            }

            //setEffectText("")
            setEffects(effectArr)
            //this.setState({...this.state, effects: effectArr, effectText: ""})

        }

        setStep(2)
    }


    return (
        <div>
            <ImportMenue step={step} callbackButtonOne={resetToStepOne}/>
            {step === 1 ?
                <div>
                    <PasteBlock callbackHandlePaste={handlePaste}/>
                </div> :
                <div>
                    <PreviewBlock effectArr ={effekte}/>
                </div>
            }
            {warning === true ?
                <div>
                    The content that was patse seems not to be from 3D effect
                </div> :
                null
            }
        </div>
    )
}