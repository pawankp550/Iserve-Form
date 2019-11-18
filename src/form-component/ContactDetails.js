import React  from 'react'

const ContactDetails = () => {
	
		return(
			<div className="contact-info">
				<span><label className="my-element">Full Name</label><input type="text" placeholder="Name"/></span>
				<span><label>Mobile No.</label><input type="number" placeholder="Mobile"/></span>
				<span><label>Email</label><input placeholder="Email"/></span>
			</div> 
		)
}

export default ContactDetails