import React from 'react';
import { Month, MonthRange } from '../../spec';

const monthOptions = Object.values(Month).map((v) => (
	<option key={v} value={v}>
		{v.toString()}
	</option>
));

export interface InSeasonFilterProps {
	monthStart: Month;
	monthEnd: Month;
	onChange: (range: Partial<MonthRange>) => void;
}

class InSeasonFilter extends React.Component<InSeasonFilterProps, {}> {
	public render(): JSX.Element {
		return (
			<div className="filterRow">
				<h1>Filter</h1>
				<div className="filterRow">
					<h2>In Season</h2>
					<label>From</label>
					<select
						onChange={(e) => {
							this.props.onChange({ monthStart: e.currentTarget.value as Month });
						}}>
						{monthOptions}
					</select>
					<label>To</label>
					<select
						onChange={(e) => {
							this.props.onChange({ monthEnd: e.currentTarget.value as Month });
						}}>
						{monthOptions}
					</select>
				</div>
			</div>
		);
	}
}

export default InSeasonFilter;
