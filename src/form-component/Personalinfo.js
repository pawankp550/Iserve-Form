import React  from 'react'
import DatePicker from './styled components/datepicker/DatePicker'

const Personalinfo = () => {
	
		return(
			<div className="personal-info">
				<span><label>Date of birth</label><DatePicker/></span>
				<span>
					<label>Marital Status</label><select>
						<option value="Married">Married</option>
						<option value="Single">Single</option>
						<option value="Divorced">Divorced</option>
						<option value="Widower">Widower</option>
					</select>
				</span>
				<span><label>Annual Income</label><input type="number" placeholder="Annual Income"/></span>
				<span>
					<label>Educational Info</label><select>
						<option value="Professional Degree">Professional Degree</option>
						<option value="Post Graduate">Post Graduate</option>
						<option value="Graduate">Graduate</option>
					</select>
				</span>
				
				<span>
					<label>Occupation Type</label><select>
						<option value="Salaried">Salaried</option>
						<option value="Professional">Professional</option>
						<option value="Self employed from home">Self employed from home</option>
						<option value="Agriculture">Agriculture</option>
						<option value="Housewife">Housewife</option>
						<option value="Student">Student</option>
						<option value="Others">Others</option>
					</select>
				</span>
			</div> 
		)
}

export default Personalinfo