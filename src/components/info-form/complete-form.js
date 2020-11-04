import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const CompleteForm = ({
	defaultTextFields,
	handlePassengerInput,
	passengerInfo,
}) => {
	return Object.keys(defaultTextFields).map((textField) => {
		return (
			<Grid key={defaultTextFields[textField].id} item xs={12} sm={6}>
				<TextField
					required
					fullWidth
					value={passengerInfo[defaultTextFields[textField].id] || ''}
					onChange={handlePassengerInput}
					id={defaultTextFields[textField].id}
					name={defaultTextFields[textField].id}
					label={defaultTextFields[textField].label}
					type={defaultTextFields[textField].type}
					autoComplete={defaultTextFields[textField].autoComplete}
				/>
			</Grid>
		);
	});
};

export default CompleteForm;
