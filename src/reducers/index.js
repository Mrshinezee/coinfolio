// redux library
import { combineReducers } from 'redux';

// reducers
import dashboard from './dashboard';

/**
 * @desc combines all the reducers
*/
export default combineReducers({
    dashboard,
});
