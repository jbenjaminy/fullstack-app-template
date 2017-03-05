import fetch from 'isomorphic-fetch';
import {
    ANECDOTES_FORM_UPDATE,
    FETCH_ANECDOTES_SUCCESS,
    CLEAR_ANECDOTES,
    REPORT_FAILURE
} from './types';

/* Single action creator to handle any update to the form. */
export const anecdotesFormUpdate = ({ prop, value }) => ({
    type: ANECDOTES_FORM_UPDATE,
    data: { prop, value }
});

export const clearAnecdotes = () => ({
	type: CLEAR_ANECDOTES
});

export const fetchAnecdotesSuccess = (anecdotes) => ({
	type: FETCH_ANECDOTES_SUCCESS,
	data: anecdotes
});

export const reportFailure = (whatType, error) => ({
	type: REPORT_FAILURE,
	data: { whatType, error }
});

export const fetchAnecdotesList = () => dispatch => (
	fetch('/anecdotes').then(response => {
		if (!response.ok) throw (new Error(response.statusText));
		return response.json();
	}).then(data =>
		dispatch(fetchAnecdotesSuccess(data.message))
	).catch(error =>
		dispatch(reportFailure('update profile details', error))
	)
);

export const createAnecdote = (anecdote) => dispatch => (
	fetch('/anecdote', {
        method: 'POST',
        body: JSON.strigify({ anecdote })
    }).then(response => {
		if (!response.ok) throw (new Error(response.statusText));
		return response.json();
	}).then(profile =>
		dispatch(fetchAnecdotesSuccess(profile))
	).catch(error =>
		dispatch(reportFailure('fetch profile details', error))
	)
);
