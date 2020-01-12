import { Action } from 'redux';
import { ActionType } from './actionTypes';
import { Map } from '../state';

export interface ToggleTrackUserAction extends Action {
	type: ActionType.TOGGLE_TRACK_USER;
}

export function toggleTrackUserAction(): ToggleTrackUserAction {
	return { type: ActionType.TOGGLE_TRACK_USER };
}

export function toggleTrackUser(state: Map, _action: ToggleTrackUserAction): Map {
	const map: Map = {
		...state,
		trackUser: !state.trackUser,
		userLocation: state.trackUser ? undefined : state.userLocation,
	};
	return map;
}
