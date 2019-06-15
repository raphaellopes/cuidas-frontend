// vendors
import { combineReducers } from 'redux';

// locals
import users from './users';
import appointments from './appointments';

export default combineReducers({ users, appointments });
