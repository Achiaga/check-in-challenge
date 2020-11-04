import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';

const useStyles = makeStyles((theme) => ({
	stepper: {
		padding: theme.spacing(3, 0, 5),
	},
}));

const StepperComponent = ({ activeStep, steps }) => {
	const classes = useStyles();
	return (
		<Stepper activeStep={activeStep} className={classes.stepper}>
			{steps.map((label) => (
				<Step key={label}>
					<StepLabel>{label}</StepLabel>
				</Step>
			))}
		</Stepper>
	);
};
export default StepperComponent;
