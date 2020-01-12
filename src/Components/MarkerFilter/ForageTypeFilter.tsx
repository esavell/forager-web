import React from 'react';
import { TreeType, TreeTypes } from '../../spec';
import GroupedOptionsPicker from '../pickers/GroupedOptionsPicker';
import { setTreeTypeVisibilityAction } from '../../actions';
import { State, Filter } from '../../state';
import store from '../../store';
import { connect } from 'react-redux';

function mapStateToProps(state: State): ForageSeasonFilterProps {
	const filter: Filter = state.filter;
	return { selectedTypes: filter.selectedTypes };
}

interface ForageSeasonFilterProps {
	selectedTypes: TreeType[];
}

class ForageTypeFilter extends React.Component<ForageSeasonFilterProps, {}> {
	public render(): JSX.Element {
		return (
			<div className="filterRow">
				<GroupedOptionsPicker<TreeType>
					name="tree_type"
					onChange={(t: TreeType, b: boolean) =>
						store.dispatch(setTreeTypeVisibilityAction(t, b))
					}
					selectedOptions={this.props.selectedTypes}
					allOptions={TreeTypes}
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps)(ForageTypeFilter);
