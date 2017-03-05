import fetch from 'isomorphic-fetch';
import {
    LOGIN_FORM_UPDATE,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from './types';

export const loginFormUpdate = ({ prop, value }) => ({
    type: LOGIN_FORM_UPDATE,
    data: { prop, value }
});

export const loginUserStart = () => ({
	type: LOGIN_USER_START
});

export const loginUserSuccess = (user) => ({
	type: LOGIN_USER_SUCCESS,
	data: user
});

export const loginUserFailure = (err) => ({
	type: LOGIN_USER_FAILURE,
    data: err
});

export const login = (credentials) => dispatch => (
    fetch('/login', {
        body: JSON.strigify({ credentials })
    }).then(res => {
		if (!res.ok) throw (new Error(res.statusText));
		return res.json();
	}).then(data =>
		dispatch(loginUserSuccess(data))
	).catch(err =>
		dispatch(loginUserFailure(err))
	)
);

export const register = (credentials) => dispatch => (
	fetch('/anecdotes', {
        method: 'POST',
        body: JSON.strigify({ credentials })
    }).then(res => {
		if (!res.ok) throw (new Error(res.statusText));
		return res.json();
	}).then(data =>
		dispatch(loginUserSuccess(data))
	).catch(err =>
		dispatch(loginUserFailure(err))
	)
);
