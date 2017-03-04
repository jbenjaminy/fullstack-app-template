import _ from 'lodash';
import {
	FORM_UPDATE,
	LOGIN_USER_START,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	FETCH_PROFILE_SUCCESS,
	FETCH_ANECDOTES_SUCCESS,
	CLEAR_ANECDOTES,
	REPORT_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
	auth: { email: '', password: '', loading: false, error: '', user: null },
	profile: { name: '', age: '', sex: '', country: '' },
	anecdotes: [{q: 'What should I do?', a: 'Add some anecdotes!', uid: 'anecdote-default'}]
};

export default (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case FORM_UPDATE:
            return { ...state, [action.data.prop]: action.data.value };
        case LOGIN_USER_START: {
			// const { loading, error } = state.auth;
            // return { ...state, loading: true, error: '' };
		}
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE.auth, user: action.data };
		case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication failure.', password: '', loading: false };
		case FETCH_PROFILE_SUCCESS:
			return { ...state, profile };
		case FETCH_ANECDOTES_SUCCESS: {
			const anecdotes = _.map(action.data, (val, uid) => {
				return { ...val, uid };
			});
			return { ...state, anecdotes };
		}
		case CLEAR_ANECDOTES:
			return { ...state, ...INITIAL_STATE.anecdotes };
		case REPORT_FAILURE:
            console.error(`${action.type} failure:`);
            console.error(action.error);
            break;
        default: break;
	}
	return state;
}
