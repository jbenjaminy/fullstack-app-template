import { combineReducers } from 'redux';
import AuthReducer from './auth-reducer';
import ProfileReducer from './profile-reducer';
import AnecdotesReducer from './anecdotes-reducer';


export default combineReducers({
    auth: AuthReducer,
    profile: ProfileReducer,
    anecdotes: AnecdotesReducer
});
