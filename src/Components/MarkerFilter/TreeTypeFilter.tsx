import React from 'react';
import { TreeType, TreeTypeDict } from '../../spec';

interface FruitTypeFilterProps {
	selectedTypes: TreeType[];
	allTypes: TreeTypeDict;
	onChange: (treeType: TreeType) => void;
}

class FruitTypeFilter extends React.Component<FruitTypeFilterProps, {}> {
	private createTreeTypeButtons(types: TreeType[]): JSX.Element[] {
		return types.map((treeType: TreeType) => {
			return (
				<button
					className={
						this.props.selectedTypes.find((t) => t === treeType)
							? 'selected'
							: undefined
					}
					key={treeType}
					onClick={() => this.props.onChange(treeType)}>
					{treeType}
				</button>
			);
		});
	}

	private createAllMarkerTypes(): JSX.Element[] {
		return Object.keys(this.props.allTypes).map((treeTypeCategory: string) => {
			return (
				<div key={treeTypeCategory}>
					<h3>{treeTypeCategory}</h3>
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

export default FruitTypeFilter;
