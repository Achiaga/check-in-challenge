import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(5),
		marginLeft: theme.spacing(1),
	},
}));

const ButtonComponent = ({ activeStep, stepsLength, handleBack }) => {
	const classes = useStyles();

	const getButtonText = () => {
		if (activeStep === 0) return 'Check In';
		if (activeStep === stepsLength - 1) return 'Confirm';
		return 'Next';
	};

	return (
		<Grid item xs={12} className={classes.buttons}>
			{activeStep !== 0 && (
				<Button onClick={handleBack} className={classes.button}>
					Back
				</Button>
			)}
			<Button
				type='submit'
				variant='contained'
				color='primary'
				className={classes.button}>
				{getButtonText()}
			</Button>
		</Grid>
	);
};
export default ButtonComponent;
