import React from 'react';
import ForageSeasonFilter from './ForageSeasonFilter';
import ForageTypeFilter from './ForageTypeFilter';
import AccessibilityFilter from './AccessibilityFilter';

class MarkerFilter extends React.Component<{}, {}> {
	public render(): JSX.Element {
		return (
			<div className="filterContainer">
				<h1>Filter</h1>
				<h2>In Season</h2>
				<ForageSeasonFilter />
				<h2>Forage Type</h2>
				<ForageTypeFilter />
				<h2>Accessibility</h2>
				<AccessibilityFilter />
			</div>
		);
	}
}

export default MarkerFilter;
