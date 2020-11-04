import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const CompleteForm = ({
	completeFormFields,
	handlePassengerInput,
	passengerInfo,
}) => {
	return Object.values(completeFormFields).map(
		({ id, label, type, autoComplete }) => {
			return (
				<Grid key={id} item xs={12} sm={6}>
					<TextField
						required
						fullWidth
						value={passengerInfo[id] || ''}
						onChange={handlePassengerInput}
						id={id}
						name={id}
						label={label}
						type={type}
						autoComplete={autoComplete}
					/>
				</Grid>
			);
		}
	);
};

export default CompleteForm;
