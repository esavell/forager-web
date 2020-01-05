import { Action } from 'redux';
import {
	ActionType,
	toggleTrackUser,
	ToggleTrackUserAction,
	setUserLocation,
	SetUserLocationAction,
} from '../Actions';
import { Map } from '../State';

export default function filterReducer(
	state: Map = {
		trackUser: false,
	},
	action: Action,
): Map {
	switch (action.type) {
	case ActionType.TOGGLE_TRACK_USER:
		return toggleTrackUser(state, action as ToggleTrackUserAction);
	case ActionType.SET_USER_LOCATION:
		return setUserLocation(state, action as SetUserLocationAction);
	default:
		return state;
	}
}
