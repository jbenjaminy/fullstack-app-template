import _ from 'lodash';
import {
    UPDATE_ANECDOTES_FORM,
    FETCH_ANECDOTES_SUCCESS,
    CLEAR_ANECDOTES
} from '../actions/types';

const INITIAL_STATE = {
    input: '',
    anecdotes: [{
        a: 'This is a place for you to tell others personal anecdotes!',
        uid: 'default-string'
    }],

};


export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case UPDATE_ANECDOTES_FORM:
            return { ...state, input: action.data.value };
        case FETCH_ANECDOTES_SUCCESS: {
            const anecdotes = _.map(action.data, (val, uid) => (
                { ...val, uid }
            ));
            return { ...state, input: '', anecdotes };
        }
        case CLEAR_ANECDOTES:
            return { ...state, ...INITIAL_STATE };
        default: break;
    }
    return state;
};
