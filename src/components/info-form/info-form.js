import React, { useState, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CompleteForm from './complete-form';
import CheckboxForm from './checkbox-form';
import {
	defaultTextFields,
	SpanishText,
	AustriaText,
	BelgiumText,
	FranceText,
	GreeceText,
} from '../../form-structure/form-structure';

const InfoForm = ({ customForm, passengerInfo, handlePassengerInput }) => {
	const getCustomForm = {
		Spain: SpanishText,
		Austria: AustriaText,
		Belgium: BelgiumText,
		France: FranceText,
		Greece: GreeceText,
	}[customForm];

	const completeFormFields = {
		...defaultTextFields,
		...(getCustomForm && { ...getCustomForm }),
	};

	return (
		<>
			<Typography variant='h6' gutterBottom>
				Passenger Info
			</Typography>
			<Grid container spacing={3}>
				<CompleteForm
					completeFormFields={completeFormFields}
					handlePassengerInput={handlePassengerInput}
					passengerInfo={passengerInfo}
				/>
				<CheckboxForm />
			</Grid>
		</>
	);
};
export default InfoForm;
