import React, { useState } from 'react'
import ReactRadioGroup  from 'react-radio-toggle' 

import './radioButton.css'

const RadioButtons = (props) => {
    const [buttonState, setButtonState] = useState({
        selectedButton: null
    })

    const { selectedButton } = buttonState

    const onOptionSelect = (value) => {
        console.log(value)
        setButtonState({
            selectedButton: value
        })
       
    }
    let items = props.radioOptions
    return (
        <ReactRadioGroup 
            items={items}
            checked={items[0]}
            name={props.name}
            onToggle={onOptionSelect}
        />
    )
}

export default RadioButtons