import Select from 'react-select';
import React, { useState } from 'react';

const SelectOption = ({ dropdownOptions }) => {

    const [selectOption, setOption] = useState({
        selectedOption: null
    })

    const options = dropdownOptions

    const handleChange = value => {

        setOption({
            selectedOption: value
        })
    }


    return (
        <Select 
            value={selectOption.selectedOption}
            onChange={handleChange}
            options={options}
        />
    )
}

export default SelectOption
