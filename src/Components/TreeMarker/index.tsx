import React from 'react';
import './index.css';
import { Marker } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { TreeMarkerProps, TreeType } from '../Map';

class TreeMarker extends React.Component<TreeMarkerProps, {}> {

	private getColour(type: TreeType): string {
		switch (type) {
		case TreeType.apple:
		case TreeType.crabapple:
			return 'green';
		case TreeType.lemon:
			return 'yellow';
		case TreeType.walnut:
			return 'brown';
		case TreeType.mandarin:
			return 'orange';
		case TreeType.blackberry:
			return 'purple';
		default:
			return 'black';
		}
	}

	public render(): JSX.Element {
		return (
			<Marker
				key={this.props.id}
				latitude={parseFloat(this.props.location.latitude.toString())}
				longitude={parseFloat(
					this.props.location.longitude.toString(),
				)}>
				<FontAwesomeIcon
					icon={faSeedling}
					color={this.getColour(this.props.type)}
				/>
			</Marker>
		);
	}
}

export default TreeMarker;
