import { Action } from 'redux';
import {
	ActionType,
	SetTreeTypeVisibilityAction,
	setTreeTypeVisibility,
	setInSeasonRange,
	SetInSeasonRangeAction,
	toggleCurbside,
	ToggleCurbsideAction,
	toggleMaxTreeHeight,
	ToggleMaxTreeHeightAction,
	setTreeHeight,
	SetTreeHeightAction,
} from '../actions';
import { Filter } from '../state';
import { TreeType, Month } from '../spec';

export default function filterReducer(
	state: Filter = {
		selectedTypes: Object.values(TreeType) as TreeType[],
		inSeasonMonthStart: Month.Jan,
		inSeasonMonthEnd: Month.Dec,
		maxTreeHeightM: 5,
		maxTreeHeightEnabled: false,
		curbsideOnly: false,
	},
	action: Action,
): Filter {
	switch (action.type) {
	case ActionType.TOGGLE_TREE_TYPE:
		return setTreeTypeVisibility(state, action as SetTreeTypeVisibilityAction);
	case ActionType.SET_IN_SEASON_RANGE:
		return setInSeasonRange(state, action as SetInSeasonRangeAction);
	case ActionType.TOGGLE_CURBSIDE:
		return toggleCurbside(state, action as ToggleCurbsideAction);
	case ActionType.TOGGLE_MAX_TREE_HEIGHT:
		return toggleMaxTreeHeight(state, action as ToggleMaxTreeHeightAction);
	case ActionType.SET_TREE_HEIGHT:
		return setTreeHeight(state, action as SetTreeHeightAction);
	default:
		return state;
	}
}
