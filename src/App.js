import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import Header from './components/header';
import Stepper from './components/stepper';
import Copyright from './components/copyright';
import FormContent from './components/form-content';

const useStyles = makeStyles((theme) => ({
	layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		minHeight: '80vh',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: '14px 0',
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
			justifyContent: 'center',
			minHeight: '80vh',
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
			padding: '14px 0',
		},
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
}));

const steps = ['Check-in', 'Info', 'Review'];

function App() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);

	return (
		<>
			<CssBaseline />
			<Header />
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Stepper activeStep={activeStep} steps={steps} />
					<FormContent
						activeStep={activeStep}
						stepsLength={steps.length}
						setActiveStep={setActiveStep}
					/>
				</Paper>
				<Copyright />
			</main>
		</>
	);
}

export default App;
