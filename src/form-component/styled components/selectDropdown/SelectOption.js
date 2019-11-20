import Select from 'react-select';
import React, { useState } from 'react';

const SelectOption = ({ dropdownOptions }) => {

    const [selectedOption, setOption] = useState({
        selectedOption: ''
    })

    console.log(dropdownOptions)
    const options = dropdownOptions

    const handleChange = selectedOption => {
        setOption({
            optionSelected: selectedOption
        })
    }


    return (
        <Select 
            value={selectedOption.optionSelected}
            onChange={handleChange}
            options={options}
        />
    )
}

export default SelectOption
