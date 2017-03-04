import _ from 'lodash';
import {
    FETCH_ANECDOTES_SUCCESS,
	CLEAR_ANECDOTES,
	REPORT_FAILURE
} from '../actions/types';

const INITIAL_STATE = [{ q: 'What should I do?', a: 'Add some anecdotes!', uid: 'anecdote-default' }];
export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {

            case ANECDOTES_FETCH_SUCCESS:
            return {...state, paula: action.paula};

        case REPORT_FAILURE:
            console.error(`Failure in ${action.what}:`);
            console.error(action.error);
            break;
        default: break;
    }
    return state;
}
