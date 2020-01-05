import { Action } from 'redux';
import { ActionType } from './actionTypes';
import { Filter } from '../State';

export interface ToggleMaxTreeHeightAction extends Action {
	type: ActionType.TOGGLE_MAX_TREE_HEIGHT;
}

export function toggleMaxTreeHeightAction(): ToggleMaxTreeHeightAction {
	return { type: ActionType.TOGGLE_MAX_TREE_HEIGHT };
}

export function toggleMaxTreeHeight(state: Filter, action: ToggleMaxTreeHeightAction): Filter {
	const filter: Filter = {
		...state,
		maxTreeHeightEnabled: !state.maxTreeHeightEnabled,
	};
	return filter;
}
