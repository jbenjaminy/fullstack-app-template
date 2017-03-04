import _ from 'lodash';
import { FETCH_ANECDOTES_SUCCESS, CLEAR_ANECDOTES } from '../actions/types';

const INITIAL_STATE = [{
    a: 'Tell others about yourself!',
    uid: 'anecdote-default'
}];

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case FETCH_ANECDOTES_SUCCESS: {
            const anecdotes = _.map(action.data, (val, uid) => (
                { ...val, uid }
            ));
            return { ...state, anecdotes };
        }
        case CLEAR_ANECDOTES:
            return { ...state, ...INITIAL_STATE };
        default: break;
    }
    return state;
};
