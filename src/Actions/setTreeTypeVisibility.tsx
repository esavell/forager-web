import { Action } from 'redux';
import { ActionType } from './actionTypes';
import { Filter } from '../state';
import { TreeType } from '../spec';

export interface SetTreeTypeVisibilityAction extends Action {
	type: ActionType.TOGGLE_TREE_TYPE;
	treeType: TreeType;
	isVisible: boolean;
}

export function setTreeTypeVisibilityAction(
	treeType: TreeType,
	isVisible: boolean,
): SetTreeTypeVisibilityAction {
	return { type: ActionType.TOGGLE_TREE_TYPE, treeType, isVisible };
}

export function setTreeTypeVisibility(state: Filter, action: SetTreeTypeVisibilityAction): Filter {
	const treeType = action.treeType;
	const filteredArray = state.selectedTypes.filter((t) => t !== treeType);
	const filter: Filter = {
		...state,
		selectedTypes: action.isVisible ? [...filteredArray, treeType] : filteredArray,
	};
	return filter;
}
