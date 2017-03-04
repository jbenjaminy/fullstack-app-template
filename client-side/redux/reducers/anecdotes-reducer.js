import _ from 'lodash';
import {
    ANECDOTES_CREATE_SUCCESS,
    ANECDOTES_FETCH_SUCCESS,
    REPORT_FAILURE
} from '../actions/types';

const INITIAL_STATE = [{q: 'What should I do?', a: 'Add some anecdotes!', uid: 'anecdote-default'}];
export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case ANECDOTES_FETCH_SUCCESS: {
            const meds = _.map(action.data, (val, uid) => {
                return { ...val, uid };
            });
            const medArr = [];
            for (let i = 1; i <= 7; i++) {
                let item = {
                  compartment: i,
                  name: 'Empty',
                  dosage: '',
                  howOften: '',
                  uri: ''
              };
                meds.forEach((med) => {
                    if (med.compartment === i) {
                        item = med;
                    }
                });
                medArr.push(item);
            }
            return medArr;
        }

            return state;
            case 'FETCH_ANECDOTES_SUCCESS':
            return {...state, paula: action.paula};

            case 'REPORT_FAILURE':
                console.error("Failure in " + action.what + ":");
                console.error(action.error);
                break;
            default: break;
        }
        return state;
        }
