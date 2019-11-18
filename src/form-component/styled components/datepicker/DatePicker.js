import React, {useState} from 'react';
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './datepicker.css'

const DatePicker =  () => {
	const [DateObj, setDate] = useState({
		startDate: new Date()
	})

	const handleChange = (selectedDate) => {
		setDate({
			startDate: selectedDate
		})
	} 

	return (
		<><Datepicker 
			selected={DateObj.startDate}
        	onChange={handleChange}
		/></>
	)
}

export default DatePicker