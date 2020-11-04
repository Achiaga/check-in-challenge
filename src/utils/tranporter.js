import fetchApi from './api';

export const requestCheckInApi = async (checkInStatus, setCheckInStatus) => {
	setCheckInStatus({ ...checkInStatus, isLoading: true });
	try {
		const result = await fetchApi('3c48f018/');
		setCheckInStatus({ ...checkInStatus, isLoading: false });
		if (result.flight_check_in)
			setCheckInStatus({ ...checkInStatus, isSuccess: true });
	} catch (err) {
		setCheckInStatus({ ...checkInStatus, hasError: true });
	}
};
