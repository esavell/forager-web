import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import TreeTypeFilter from './TreeTypeFilter';
import InSeasonFilter from './InSeasonFilter';
import { State, Filter } from '../../State';
import { TreeTypes, TreeType, MonthRange } from '../../spec';
import store from '../../store';
import {
	toggleTreeTypeAction,
	toggleCurbsideAction,
	toggleMaxTreeHeightAction,
	setTreeHeightAction,
	setInSeasonRangeAction,
} from '../../Actions';

function mapStateToProps(state: State): Filter {
	return state.filter;
}

class MarkerFilter extends React.Component<Filter, {}> {
	public render(): JSX.Element {
		return (
			<div className="filterContainer">
				<InSeasonFilter
					onChange={(r: Partial<MonthRange>) => store.dispatch(setInSeasonRangeAction(r))}
					monthStart={this.props.inSeasonMonthStart}
					monthEnd={this.props.inSeasonMonthEnd}
				/>
				<TreeTypeFilter
					onChange={(t: TreeType) => store.dispatch(toggleTreeTypeAction(t))}
					selectedTypes={this.props.selectedTypes}
					allTypes={TreeTypes}
				/>
				<div className="filterRow">
					<h2>Accessibility</h2>
					<button
						className={this.props.curbsideOnly ? 'selected' : undefined}
						onClick={() => store.dispatch(toggleCurbsideAction())}>
						Reachable from Footpath
					</button>
					<button
						className={this.props.maxTreeHeightEnabled ? 'selected' : undefined}
						onClick={() => store.dispatch(toggleMaxTreeHeightAction())}>
						Trees no higher than
						<input
							type="number"
							defaultValue={this.props.maxTreeHeightM}
							onBlur={(e) => {
								store.dispatch(setTreeHeightAction(e.target.valueAsNumber));
							}}>
						</input>
						m
					</button>
				</div>
			</div>
		);
	}
}
export default connect(mapStateToProps)(MarkerFilter);
