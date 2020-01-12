import React from 'react';
import { Month } from '../../spec';

const monthOptions = Object.values(Month).map((v) => (
	<option key={v} value={v}>
		{v.toString()}
	</option>
));

export interface MonthPickerProps {
	currentMonth: Month;
	onChange: (month: Month) => void;
}

class MonthPicker extends React.Component<MonthPickerProps, {}> {
	public render(): JSX.Element {
		return (
			<select
				value={this.props.currentMonth}
				onChange={(e) => {
					this.props.onChange(e.currentTarget.value as Month);
				}}>
				{monthOptions}
			</select>
		);
	}
}

export default MonthPicker;
