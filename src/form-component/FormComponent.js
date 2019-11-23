import React, { useState, useEffect }  from 'react'
import ContactDetails from './ContactDetails'
import Personalinfo from './Personalinfo'
import $ from 'jquery'

const FormComponent = () => {
	 const [inputs, setInputs] = useState({
		 		isContact: true
    })
	 

		useEffect(() => {
    // code to run on component mount
			animations()
  }, [])

	 function animations () {
		 console.log('in animations')
		 $('.form-option').on('click', highLightOption)
			$('input').on('focus', highLightInput)
			$('input').on('focusout', removeHighlightInput)
	 }

	 function highLightOption () {
		  $('.form-option').removeClass('activeProgress')
			$(this).addClass('activeProgress')
			animations()
		}
		
		function highLightInput () {
			$(this).addClass('active')
			$(this).prev().css('visibility', 'visible');
			$(this).prev().removeClass('animated faster fadeOut')
			$(this).prev().addClass('animated faster fadeInUp')
		}

		function removeHighlightInput () {
			const textLength = $(this).val().length
			console.log(textLength)
			$(this).removeClass('active')
			if(textLength === 0 || textLength === '' || textLength === ' ') {
				$(this).prev().removeClass('nimated faster fadeInUp')
				$(this).prev().addClass('animated faster fadeOut')
			}
		}

		const switchForm = (isContact) => {
			setInputs({isContact})
		} 

		const getComponent = () => {
			const { isContact } = inputs
			return isContact ? <ContactDetails /> : <Personalinfo />
		}

		return(
			<div className ="main-form-container">
				<div className="form-progress">
					<span className="form-option" onClick = {() => {switchForm(true)}}>CONTACT</span><div></div><span className="form-option" onClick = {() => {switchForm(false)}}>PERSONAL</span>
				</div>
				{getComponent()}
			</div>  
		)
}

export default FormComponent