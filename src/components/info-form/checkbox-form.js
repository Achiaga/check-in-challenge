import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const label = (
	<span>
		I agree with &nbsp;
		<a
			href='https://generator.lorem-ipsum.info/terms-and-conditions'
			target='_blank'>
			{'T&C'}
		</a>
	</span>
);

const CheckboxForm = () => {
	return (
		<Grid item xs={12}>
			<FormControlLabel
				control={
					<Checkbox color='secondary' name='saveAddress' value='yes' required />
				}
				label={label}
			/>
		</Grid>
	);
};
export default CheckboxForm;
