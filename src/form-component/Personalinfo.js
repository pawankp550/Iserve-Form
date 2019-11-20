import React  from 'react'
import DatePicker from './styled components/datepicker/DatePicker'
import SelectOption from './styled components/selectDropdown/SelectOption'

import { maritalStatus, EducationalInfo, OccupationType } from './options data/dropdownOptions'

const Personalinfo = () => {
	
		return(
			<div className="personal-info">
				<span><label>Date of birth</label><DatePicker/></span>
				<span>
					<label>Marital Status</label><SelectOption dropdownOptions = {maritalStatus}/>
				</span>
				<span><label>Annual Income</label><input type="number" placeholder="Annual Income"/></span>
				<span>
					<label>Educational Info</label><SelectOption dropdownOptions = {EducationalInfo}/>
				</span>
				
				<span>
					<label>Occupation Type</label><SelectOption dropdownOptions = {OccupationType}/>
				</span>
			</div> 
		)
}

export default Personalinfo