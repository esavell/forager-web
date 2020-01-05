import filter from './filter';
import map from './map';
import markers from './markers';
import { combineReducers } from 'redux';

export default combineReducers({
	filter,
	map,
	markers,
});
