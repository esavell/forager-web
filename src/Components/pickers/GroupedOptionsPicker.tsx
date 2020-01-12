import React from 'react';

interface GroupedOptionsPickerProps<T extends string> {
	name: string;
	selectedOptions: T[];
	allOptions: { [category: string]: T[] };
	onChange: (option: T, isSelected: boolean) => void;
}

class GroupedOptionsPicker<T extends string> extends React.Component<
	GroupedOptionsPickerProps<T>,
	{}
> {
	private createOptionButtons(options: T[]): JSX.Element[] {
		return options.map((option: T) => {
			return (
				<span key={option}>
					<label htmlFor={option}>{option.toString()}</label>
					<input
						type="checkbox"
						id={option}
						name={this.props.name}
						checked={this.props.selectedOptions.findIndex((t) => t === option) >= 0}
						onChange={(ev) =>
							this.props.onChange(option, (ev.target as HTMLInputElement).checked)
						}
					/>
				</span>
			);
		});
	}

	private createOptionGroups(): JSX.Element[] {
		return Object.keys(this.props.allOptions).map((optionGroup: string) => {
			return (
				<div key={optionGroup}>
					<label>{optionGroup.toString()}</label>
					{this.createOptionButtons(this.props.allOptions[optionGroup])}
				</div>
			);
		});
	}

	public render(): JSX.Element {
		return <div>{this.createOptionGroups()}</div>;
	}
}

export default GroupedOptionsPicker;
