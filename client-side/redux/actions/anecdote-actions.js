import fetch from 'isomorphic-fetch';
import {
    ANECDOTES_FORM_UPDATE,
    FETCH_ANECDOTES_SUCCESS,
    CLEAR_ANECDOTES,
    REPORT_FAILURE
} from './types';

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
	fetch('/anecdotes').then(res => {
		if (!res.ok) throw (new Error(res.statusText));
		return res.json();
	}).then(data =>
		dispatch(fetchAnecdotesSuccess(data.message))
	).catch(err =>
		dispatch(reportFailure('fetch anecdote list', err))
	)
);

export const createAnecdote = (anecdote) => dispatch => (
	fetch('/anecdotes', {
        method: 'POST',
        body: JSON.strigify({ anecdote })
    }).then(res => {
		if (!res.ok) throw (new Error(res.statusText));
		return res.json();
	}).then(data =>
		dispatch(fetchAnecdotesSuccess(data))
	).catch(err =>
		dispatch(reportFailure('create anecdote', err))
	)
);
