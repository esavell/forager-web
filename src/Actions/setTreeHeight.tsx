import { Action } from 'redux';
import { ActionType } from './actionTypes';
import { Filter } from '../state';

export interface SetTreeHeightAction extends Action {
	type: ActionType.SET_TREE_HEIGHT;
	maxHeightM: number;
}

export function setTreeHeightAction(maxHeightM: number): SetTreeHeightAction {
	return { type: ActionType.SET_TREE_HEIGHT, maxHeightM };
}

export function setTreeHeight(state: Filter, action: SetTreeHeightAction): Filter {
	const height = action.maxHeightM;
	const filter: Filter = {
		...state,
		maxTreeHeightM: height,
	};
	return filter;
}
