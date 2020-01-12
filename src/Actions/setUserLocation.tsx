import { Action } from 'redux';
import { ActionType } from './actionTypes';
import { Map, LatLon } from '../state';

export interface SetUserLocationAction extends Action {
	type: ActionType.SET_USER_LOCATION;
	location: LatLon | undefined;
}

export function setUserLocationAction(location: LatLon | undefined): SetUserLocationAction {
	return { type: ActionType.SET_USER_LOCATION, location };
}

export function setUserLocation(state: Map, action: SetUserLocationAction): Map {
	const map: Map = {
		...state,
		userLocation: action.location,
	};
	return map;
}
