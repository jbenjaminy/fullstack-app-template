import fetch from 'isomorphic-fetch';
import {
    PROFILE_FORM_UPDATE,
    FETCH_PROFILE_SUCCESS,
	REPORT_FAILURE
} from './types';

/* Single action creator to handle any update to the form. */
export const medUpdate = ({ prop, value }) => ({
    type: PROFILE_FORM_UPDATE,
    data: { prop, value }
});

export const fetchProfileSuccess = (profile) => ({
	type: FETCH_PROFILE_SUCCESS,
	data: profile
});

export const reportFailure = (whatType, error) => ({
	type: REPORT_FAILURE,
	data: { whatType, error }
});

export const fetchProfileDetails = () => dispatch => (
	fetch('/profile').then(response => {
		if (!response.ok) throw (new Error(response.statusText));
		return response.json();
	}).then(profile =>
		dispatch(fetchProfileSuccess(profile))
	).catch(error =>
		dispatch(reportFailure('fetch profile details', error))
	)
);

export const updateProfileDetails = () => dispatch => (
	fetch('/profile').then(response => {
		if (!response.ok) throw (new Error(response.statusText));
		return response.json();
	}).then(data =>
		dispatch(fetchProfileSuccess(data.message))
	).catch(error =>
		dispatch(reportFailure('update profile details', error))
	)
);
