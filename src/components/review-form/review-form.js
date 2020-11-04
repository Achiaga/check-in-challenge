import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const normalizeLabel = (str) => {
	let newStr = str.replace('_', ' ');
	return newStr.charAt(0).toUpperCase() + newStr.slice(1) + ':';
};

const ReviewForm = ({ passengerInfo }) => {
	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				Review Your Information
			</Typography>
			<Grid container spacing={2}>
				<Grid item container direction='column'>
					<Grid container>
						{Object.entries(passengerInfo).map(
							([pass, passengerInfoItem], index) => {
								const newLabel = normalizeLabel(pass);
								return (
									<React.Fragment key={index}>
										<Grid item xs={6} sm={6}>
											<Typography variant='body1' gutterBottom>
												{newLabel}
											</Typography>
										</Grid>
										<Grid item xs={6} sm={6}>
											<Typography
												style={{ overflowWrap: 'break-word' }}
												variant='body1'
												gutterBottom>
												{passengerInfoItem}
											</Typography>
										</Grid>
									</React.Fragment>
								);
							}
						)}
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};
export default ReviewForm;
