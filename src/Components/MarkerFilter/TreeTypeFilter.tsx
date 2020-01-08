import React from 'react';

import { TreeType, TreeTypeDict } from '../../spec';

interface TreeTypeFilterProps {
	selectedTypes: TreeType[];
	allTypes: TreeTypeDict;
	onChange: (treeType: TreeType, value: boolean) => void;
}

class TreeTypeFilter extends React.Component<TreeTypeFilterProps, {}> {

	private createTreeTypeButtons(types: TreeType[]): JSX.Element[] {
		return types.map((treeType: TreeType) => {
			return (
				<span key={treeType}>
					<label htmlFor={treeType}>{treeType.toString()}</label>
					<input type="checkbox"
						id={treeType}
						name="tree_types"
						checked={this.props.selectedTypes.findIndex(t => t === treeType) >= 0}
						onChange={(ev) => this.props.onChange(treeType, (ev.target as HTMLInputElement).checked)}/>
				</span>
			);
		});
	}

	private createAllMarkerTypes(): JSX.Element[] {
		return Object.keys(this.props.allTypes).map((treeTypeCategory: string) => {
			return (
				<div key={treeTypeCategory}>
					<label>{treeTypeCategory.toString()}</label>
					{this.createTreeTypeButtons(this.props.allTypes[treeTypeCategory])}
				</div>
			);
		});
	}

	public render(): JSX.Element {
		return (
			<div className="filterRow">
				<h2>Forage Type</h2>
				{this.createAllMarkerTypes()}
			</div>
		);
	}
}

export default TreeTypeFilter;
