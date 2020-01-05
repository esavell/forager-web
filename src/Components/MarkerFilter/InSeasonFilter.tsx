import React from 'react';
import { Month, MonthRange } from '../../spec';
import { Dropdown } from 'semantic-ui-react';

const monthOptions = Object.values(Month).map((v) => {
	return { key: v, text: v.toString(), value: v };
});

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
					<h3>From</h3>
					<Dropdown
						selection
						value={this.props.monthStart}
						options={monthOptions}
						onChange={(e, { value }) => {
							this.props.onChange({ monthStart: value as Month });
						}}
					/>
					<h3>To</h3>
					<Dropdown
						selection
						value={this.props.monthEnd}
						options={monthOptions}
						onChange={(e, { value }) => {
							this.props.onChange({ monthEnd: value as Month });
						}}
					/>
				</div>
			</div>
		);
	}
}

export default InSeasonFilter;
