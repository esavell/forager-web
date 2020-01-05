import { Action } from 'redux';
import { ActionType } from './actionTypes';
import { Filter } from '../State';
import { TreeType } from '../spec';

export interface ToggleTreeTypeAction extends Action {
	type: ActionType.TOGGLE_TREE_TYPE;
	treeType: TreeType;
}

export function toggleTreeTypeAction(treeType: TreeType): ToggleTreeTypeAction {
	return { type: ActionType.TOGGLE_TREE_TYPE, treeType };
}

export function toggleTreeType(state: Filter, action: ToggleTreeTypeAction): Filter {
	const treeType = action.treeType;
	const filteredArray = state.selectedTypes.filter((t) => t !== treeType);
	const typeWasPresent = filteredArray.length !== state.selectedTypes.length;

	const filter: Filter = {
		...state,
		selectedTypes: typeWasPresent ? filteredArray : [...state.selectedTypes, treeType],
	};
	return filter;
}
