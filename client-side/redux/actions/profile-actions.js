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
	fetch('/profile').then(res => {
		if (!res.ok) throw (new Error(res.statusText));
		return res.json();
	}).then(data =>
		dispatch(fetchProfileSuccess(data))
	).catch(err =>
		dispatch(reportFailure('fetch profile details', err))
	)
);

export const updateProfileDetails = (profile) => dispatch => (
	fetch('/profile', {
        method: 'POST',
        body: JSON.strigify({ profile })
    }).then(res => {
		if (!res.ok) throw (new Error(res.statusText));
		return res.json();
	}).then(data =>
		dispatch(fetchProfileSuccess(data))
	).catch(err =>
		dispatch(reportFailure('update profile details', err))
	)
);
