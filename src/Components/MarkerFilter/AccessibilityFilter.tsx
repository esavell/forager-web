import React from 'react';
import {
	toggleCurbsideAction,
	toggleMaxTreeHeightAction,
	setTreeHeightAction,
} from '../../actions';
import { State, Filter } from '../../state';
import store from '../../store';
import { connect } from 'react-redux';

function mapStateToProps(state: State): AccessibilityFilterProps {
	const filter: Filter = state.filter;
	return {
		curbsideOnly: filter.curbsideOnly,
		maxTreeHeightEnabled: filter.maxTreeHeightEnabled,
		maxTreeHeightM: filter.maxTreeHeightM,
	};
}

interface AccessibilityFilterProps {
	curbsideOnly: boolean;
	maxTreeHeightEnabled: boolean;
	maxTreeHeightM: number;
}

class AccessibilityFilter extends React.Component<AccessibilityFilterProps, {}> {
	public render(): JSX.Element {
		return (
			<div className="filterRow">
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
						}}></input>
					m
				</button>
			</div>
		);
	}
}

export default connect(mapStateToProps)(AccessibilityFilter);
