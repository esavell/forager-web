import React from 'react';
import MonthPicker from '../pickers/MonthPicker';
import { Month, MonthRange } from '../../spec';
import store from '../../store';
import { setInSeasonRangeAction } from '../../actions';
import { Filter, State } from '../../state';
import { connect } from 'react-redux';

function mapStateToProps(state: State): ForageSeasonFilterProps {
	const filter: Filter = state.filter;
	return { monthStart: filter.inSeasonMonthStart, monthEnd: filter.inSeasonMonthEnd };
}

interface ForageSeasonFilterProps {
	monthStart: Month;
	monthEnd: Month;
}

class ForageSeasonFilter extends React.Component<ForageSeasonFilterProps, {}> {
	private updateMonth = (r: Partial<MonthRange>) => store.dispatch(setInSeasonRangeAction(r));
	public render(): JSX.Element {
		return (
			<div>
				<label>From</label>
				<MonthPicker
					currentMonth={this.props.monthStart}
					onChange={(monthStart: Month) => this.updateMonth({ monthStart })}
				/>
				<label>To</label>
				<MonthPicker
					currentMonth={this.props.monthEnd}
					onChange={(monthEnd: Month) => this.updateMonth({ monthEnd })}
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps)(ForageSeasonFilter);
