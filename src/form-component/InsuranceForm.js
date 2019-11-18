import React from 'react';
import './insuranceForm.css'
import Form from './FormComponent'

const InsuranceForm = () => {
    return (
        <div className="form-wrapper">
            <div className="form-container">
                <div className="proposal-card">
                    <img src="https://assets.coverfox.com/static/img/life/insurers/max-life.png" alt="Max Life" fallbackimage="https://assets.coverfox.com/static/img/life/insurers/max-life.png" className="lpc__logo" />
                    <div className="claim-info">
                        <div className="cover-info">
                            <div className="cover">
                                <p>COVER</p>
                                <span>1 Cr</span>
                            </div>
                            <div className="cover">
                                <p>COVER UPTO</p>
                                <span>70 years</span>
                            </div>
                        </div>
                        <div>
                            <p>CLAIMS SETTLED</p>
                            <span>98.74%</span><br/>
                            <span>Rs1,236/Month</span>
                        </div>
                    </div>
                </div> 
								<Form/>            
            </div>
        </div>
    )
}

export default InsuranceForm;