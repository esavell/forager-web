import { Action } from 'redux';
import {
	ActionType,
	toggleTrackUser,
	ToggleTrackUserAction,
	setUserLocation,
	SetUserLocationAction,
	setTreeMarkers,
	SetTreeMarkersAction,
} from '../Actions';
import { Map } from '../State';

export default function filterReducer(
	state: Map = {
		trackUser: false,
		treeMarkers: [],
	},
	action: Action,
): Map {
	switch (action.type) {
	case ActionType.TOGGLE_TRACK_USER:
		return toggleTrackUser(state, action as ToggleTrackUserAction);
	case ActionType.SET_USER_LOCATION:
		return setUserLocation(state, action as SetUserLocationAction);
	case ActionType.SET_TREE_MARKERS:
		return setTreeMarkers(state, action as SetTreeMarkersAction);
	default:
		return state;
	}
}
