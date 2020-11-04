import React, { useState } from 'react';
import CheckIn from '../check-in';
import InfoForm from '../info-form';
import ReviewForm from '../review-form';
import Success from '../succes';
import Button from '../button/button';
import Loading from '../status/loading';
import { requestCheckInApi } from '../../utils/tranporter';

const initialState = {
	first_name: '',
	last_name: '',
	country: '',
	phone_number: '',
	email: '',
	passport_number: '',
};

const apiStatusInitialState = {
	isLoading: false,
	isSuccess: false,
	hasError: false,
};

const FormContent = ({ activeStep, stepsLength, setActiveStep }) => {
	const [customForm, setCustomForm] = useState(null);
	const [checkInStatus, setCheckInStatus] = useState(apiStatusInitialState);
	const [passengerInfo, setPassengerInfo] = useState(initialState);

	const handlePassengerInput = (e) => {
		const { value, id } = e.target;
		if (id === 'country') setCustomForm(value);
		setPassengerInfo((passengerInfo) => ({ ...passengerInfo, [id]: value }));
	};

	const handleNext = async (e) => {
		e.preventDefault();
		if (activeStep === 0 || activeStep === 2) {
			await requestCheckInApi(checkInStatus, setCheckInStatus, activeStep);
		}
		return setActiveStep(activeStep + 1);
	};

	const handleBack = (e) => {
		e.preventDefault();
		return setActiveStep(activeStep - 1);
	};

	const StepContent = {
		0: CheckIn,
		1: InfoForm,
		2: ReviewForm,
	}[activeStep];

	if (checkInStatus.hasError)
		return (
			<>
				<h1>Error</h1>
				<h4>Try Again later!</h4>
			</>
		);

	if (checkInStatus.isLoading) return <Loading />;

	if (activeStep === stepsLength && checkInStatus.isSuccess) return <Success />;

	return (
		<form onSubmit={handleNext}>
			<StepContent
				customForm={customForm}
				passengerInfo={passengerInfo}
				handlePassengerInput={handlePassengerInput}
			/>
			<Button
				activeStep={activeStep}
				stepsLength={stepsLength}
				handleBack={handleBack}
			/>
		</form>
	);
};

export default FormContent;
