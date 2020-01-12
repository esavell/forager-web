import { Action } from 'redux';
import { ActionType } from './actionTypes';
import { Filter } from '../state';

export interface ToggleCurbsideAction extends Action {
	type: ActionType.TOGGLE_CURBSIDE;
}

export function toggleCurbsideAction(): ToggleCurbsideAction {
	return { type: ActionType.TOGGLE_CURBSIDE };
}

export function toggleCurbside(state: Filter, _action: ToggleCurbsideAction): Filter {
	const filter: Filter = {
		...state,
		curbsideOnly: !state.curbsideOnly,
	};
	return filter;
}
