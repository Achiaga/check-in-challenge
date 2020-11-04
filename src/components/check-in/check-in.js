import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const CheckIn = ({ handlePassengerInput, passengerInfo }) => {
	return (
		<div className='check-in-container'>
			<Typography variant='h5' gutterBottom>
				Check In
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<TextField
						id='flight_number'
						label='flight number'
						fullWidth
						required={true}
						value={passengerInfo['flight_number'] || ''}
						onChange={handlePassengerInput}
						autoComplete='last-name'
						type='text'
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						onChange={handlePassengerInput}
						value={passengerInfo['last_name'] || ''}
						id='last_name'
						label='last name'
						type='text'
						fullWidth
						autoComplete='last-name'
					/>
				</Grid>
			</Grid>
		</div>
	);
};
export default CheckIn;
