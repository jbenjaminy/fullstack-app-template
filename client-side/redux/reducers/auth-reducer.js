import {
    LOGIN_FORM_UPDATE,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: '',
    user: null
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case LOGIN_FORM_UPDATE:
            return { ...state, [action.data.prop]: action.data.value };
        case LOGIN_USER_START:
            return { ...state, loading: true, error: '' };
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.data };
		case LOGIN_USER_FAILURE:
            return {
                ...state,
                error: 'Authentication failure.',
                password: '',
                loading: false
            };
        default: break;
    }
    return state;
};
