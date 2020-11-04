import React from 'react';
import Typography from '@material-ui/core/Typography';

const SVGComponent = () => {
	return (
		<svg viewBox='0 0 3387 1270'>
			<path
				style={{
					stroke: '#D9DADA',
					strokeWidth: '.1%',
					strokeWidth: '.5%',
					strokeDasharray: '1% 2%',
					strokeLinecap: 'round',
					fill: 'none',
				}}
				id='planePath'
				d='M-226 626c439,4 636,-213 934,-225 755,-31 602,769 1334,658 562,-86 668,-698 266,-908 -401,-210 -893,189 -632,630 260,441 747,121 1051,91 360,-36 889,179 889,179'
			/>
			<g id='plane'>
				<polygon
					style={{ fill: '#4051b5' }}
					points='-141,-10 199,0 -198,-72 -188,-61 -171,-57 -184,-57 '
				/>
				<polygon
					style={{ fill: '#C5C6C6' }}
					points='199,0 -141,-10 -163,63 -123,9 '
				/>
				<polygon
					style={{ fill: '#D9E9E' }}
					points='-95,39 -113,32 -123,9 -163,63 -105,53 -108,45 -87,48 -90,45 -103,41 -94,41 '
				/>
				<path
					style={{ fill: '#AEAFB0' }}
					d='M-87 48l-21 -3 3 8 19 -4 -1 -1zm-26 -16l18 7 -2 -1 32 -7 -29 1 11 -4 -24 -1 -16 -18 10 23zm10 9l13 4 -4 -4 -9 0z'
				/>
				<polygon
					style={{ fill: '#4051b5' }}
					points='-83,28 -94,32 -65,31 -97,38 -86,49 -67,70 199,0 -123,9 -107,27 '
				/>
			</g>
			<animateMotion
				xlinkHref='#plane'
				dur='5s'
				repeatCount='indefinite'
				rotate='auto'>
				<mpath xlinkHref='#planePath' />
			</animateMotion>
		</svg>
	);
};

const Success = () => {
	return (
		<>
			<Typography variant='h5' gutterBottom>
				You Succesfully Checked In.
			</Typography>
			<SVGComponent />
			<br />
			<Typography variant='subtitle1'>
				We wish you a nice flight! Thank you for choosing us. {':)'}
			</Typography>
		</>
	);
};
export default Success;
