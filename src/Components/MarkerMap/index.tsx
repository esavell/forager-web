import React from 'react';
import './index.css';
import Map from './Map';
import TreeMarkerComponent from '../treeMarker';
import { TreeMarker, LatLon, Map as MapState, State } from '../../state';
import store from '../../store';
import { setUserLocationAction, toggleTrackUserAction, setTreeMarkersAction } from '../../actions';
import { connect } from 'react-redux';
import { selectFilteredMarkers } from '../../selectors/filteredTreeMarkers';
import { faShoppingBasket, faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { Marker } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MapProps extends MapState {
	treeMarkers: TreeMarker[];
}

const geoOptions: PositionOptions = {
	enableHighAccuracy: true,
};

function mapStateToProps(state: State): MapProps {
	return Object.assign({ treeMarkers: selectFilteredMarkers(state) }, state.map);
}

class MarkerMap extends React.Component<MapProps, {}> {
	public componentDidMount(): void {
		this.fetchTreeMarkers();
		this.props.trackUser && this.setUserLocation();
	}

	private fetchTreeMarkers(): void {
		fetch('https://api.myjson.com/bins/ss8nw') // Mock data
			.then((res) => {
				return res.json();
			})
			.then((markersJson) => {
				store.dispatch(setTreeMarkersAction(markersJson));
			});
	}

	private setUserLocation: () => void = () => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const userLocation: LatLon = {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				};
				store.dispatch(setUserLocationAction(userLocation));
			},
			() => {
				//TODO: Could not locate error
			},
			geoOptions,
		);
	};

	private toggleUserLocation: () => void = () => {
		if (!this.props.trackUser) {
			this.setUserLocation();
		}
		store.dispatch(toggleTrackUserAction());
	};

	private createTreeMarkers: () => void = () => {
		return this.props.treeMarkers.map((marker) => {
			return <TreeMarkerComponent key={marker.id} {...marker} />;
		});
	};

	public render(): JSX.Element {
		return (
			<div className="mapContainer" tabIndex={-1}>
				<Map>
					{this.props.userLocation && (
						<Marker {...this.props.userLocation}>
							<FontAwesomeIcon
								size="2x"
								icon={faShoppingBasket}
								className="selected"
							/>
						</Marker>
					)}
					{this.createTreeMarkers()}
				</Map>
				<button className="trackButton" onClick={this.toggleUserLocation} tabIndex={1}>
					<FontAwesomeIcon
						icon={faCrosshairs}
						className={this.props.trackUser ? 'selected' : 'unselected'}
					/>
				</button>
			</div>
		);
	}
}

export default connect(mapStateToProps)(MarkerMap);
