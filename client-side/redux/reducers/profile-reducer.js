import {
	PROFILE_FORM_UPDATE,
	FETCH_PROFILE_SUCCESS,
	REPORT_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	age: '',
	sex: '',
	location: ''
};

export default (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case PROFILE_FORM_UPDATE:
            return { ...state, [action.data.prop]: action.data.value };
		case FETCH_PROFILE_SUCCESS:
			return action.data;
		case REPORT_FAILURE:
            console.error(`${action.data.whatType} failure:`);
            console.error(action.data.error);
            break;
        default: break;
	}
	return state;
};
