import { Action } from 'redux';
import { ActionType } from './actionTypes';
import { Filter } from '../State';
import { MonthRange } from '../spec';

export interface SetInSeasonRangeAction extends Action {
	type: ActionType.SET_IN_SEASON_RANGE;
	monthRange: Partial<MonthRange>;
}

export function setInSeasonRangeAction(monthRange: Partial<MonthRange>): SetInSeasonRangeAction {
	return { type: ActionType.SET_IN_SEASON_RANGE, monthRange };
}

export function setInSeasonRange(state: Filter, action: SetInSeasonRangeAction): Filter {
	const inSeasonMonthStart = action.monthRange.monthStart || state.inSeasonMonthStart;
	const inSeasonMonthEnd = action.monthRange.monthEnd || state.inSeasonMonthEnd;
	const filter: Filter = {
		...state,
		inSeasonMonthStart,
		inSeasonMonthEnd,
	};
	return filter;
}
