import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: 'relative',
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position='absolute' color='default' className={classes.appBar}>
			<Toolbar>
				<Typography variant='h6' color='inherit' noWrap>
					Cool Fligths Enterprise
				</Typography>
			</Toolbar>
		</AppBar>
	);
};
export default Header;
