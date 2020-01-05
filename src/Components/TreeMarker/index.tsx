import React from 'react';
import './index.css';
import { Marker } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { TreeMarker } from '../../State';
import { TreeType } from '../../spec';

class TreeMarkerComponent extends React.Component<TreeMarker, {}> {
	private getColour(type: TreeType): string {
		switch (type) {
		case TreeType.Apple:
		case TreeType.Crabapple:
			return 'green';
		case TreeType.Lemon:
			return 'yellow';
		case TreeType.Walnut:
			return 'brown';
		case TreeType.Mandarin:
			return 'orange';
		case TreeType.Blackberry:
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
				longitude={parseFloat(this.props.location.longitude.toString())}>
				<FontAwesomeIcon icon={faSeedling} color={this.getColour(this.props.type)} />
			</Marker>
		);
	}
}

export default TreeMarkerComponent;
