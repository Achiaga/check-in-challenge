import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CheckIn from './check-in';

const renderComponent = (props) => {
	return render(<CheckIn {...props} />);
};

const initialProps = {
	passengerInfo: {
		flight_number: '',
		last_name: '',
	},
};

const FLIGHT_INPUT_ID = 'flight-number-input-id';
const LAST_NAME_INPUT_ID = 'last-name-input-id';

const getFlightTextBox = (ID, conditionIndex = 0) => {
	return screen.getAllByTestId(ID)[conditionIndex];
};

describe('check-in', () => {
	it('should display flight number input', () => {
		renderComponent(initialProps);
		const flightInput = getFlightTextBox(FLIGHT_INPUT_ID);
		expect(flightInput).toBeInTheDocument();
	});
	it('should display last name input', () => {
		renderComponent(initialProps);
		const lastNameInput = getFlightTextBox(LAST_NAME_INPUT_ID);
		expect(lastNameInput).toBeInTheDocument();
	});
	it('should display last name input', () => {
		const handlePassengerInput = jest.fn();
		renderComponent({ ...initialProps, handlePassengerInput });
		const flightInput = getFlightTextBox(FLIGHT_INPUT_ID);
		// Material UI does not propagate the testing id to the input box
		// in order to solve this we have to surch by the role of the input
		// inside the Flight input area
		const { getByRole } = within(flightInput);
		const fInput = getByRole('textbox');
		userEvent.type(fInput, 'G');
		expect(handlePassengerInput).toHaveBeenCalled();
	});
});
