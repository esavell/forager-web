import React from 'react';
import './index.css';
import MapboxMap, { Marker } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import TreeMarkerComponent from '../TreeMarker';
import { TreeMarker, LatLon, Map, State } from '../../State';
import store from '../../store';
import { setUserLocationAction, toggleTrackUserAction, setTreeMarkersAction } from '../../Actions';
import { connect } from 'react-redux';
import { selectFilteredMarkers } from '../../Selectors/filteredTreeMarkers';

interface MapProps extends Map {
	treeMarkers: TreeMarker[];
}

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';
const initialState: MapState = {
	viewport: {
		height: '80',
		width: '100',
		latitude: -43.52925795097041,
		longitude: 172.63467739519413,
		zoom: 11,
	},
};

export interface Viewport {
	height: number | string;
	width: number | string;
	zoom: number;
	latitude: number;
	longitude: number;
}

interface MapState {
	viewport: Viewport;
}

const geoOptions: PositionOptions = {
	enableHighAccuracy: true,
};

const red = '#63161a';
const green = '#16635b';
//const brown = "#633a16";

function mapStateToProps(state: State): MapProps {
	return Object.assign({ treeMarkers: selectFilteredMarkers(state) }, state.map);
}

class MarkerMap extends React.Component<MapProps, MapState> {
	constructor(props: MapProps) {
		super(props);
		this.fetchTreeMarkers();
		this.state = initialState;
	}

	public componentDidMount(): void {
		window.addEventListener('resize', this.resize);
		this.resize();
		this.props.trackUser && this.setUserLocation();
	}

	public componentWillUnmount(): void {
		window.removeEventListener('resize', this.resize);
	}

	private changeViewport: (v: Viewport) => void = (viewport: Viewport) => {
		this.setState((prevState) => ({
			viewport: { ...prevState.viewport, ...viewport },
		}));
	};

	private resize: () => void = () => {
		this.setState((prevState) => ({
			viewport: {
				...prevState.viewport,
				height: window.innerWidth * 0.8,
				width: window.innerWidth,
			},
		}));
	};

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

	private fetchTreeMarkers(): void {
		fetch('https://api.myjson.com/bins/ss8nw') // Mock data
			.then((res) => {
				return res.json();
			})
			.then((markersJson) => {
				store.dispatch(setTreeMarkersAction(markersJson));
			});
	}

	private createTreeMarkers: () => void = () => {
		return this.props.treeMarkers.map((marker) => {
			return <TreeMarkerComponent key={marker.id} {...marker} />;
		});
	};

	public render(): JSX.Element {
		return (
			<div className="mapContainer" tabIndex={-1}>
				<MapboxMap
					className="map"
					{...this.state.viewport}
					mapboxApiAccessToken={MAPBOX_TOKEN}
					onViewportChange={this.changeViewport}>
					{this.props.userLocation && (
						<Marker {...this.props.userLocation}>
							<FontAwesomeIcon icon={faShoppingBasket} color={red} />
						</Marker>
					)}
					{this.createTreeMarkers()}
				</MapboxMap>
				<button className="trackButton" onClick={this.toggleUserLocation} tabIndex={1}>
					<FontAwesomeIcon
						icon={faCrosshairs}
						color={this.props.trackUser ? red : green}
					/>
				</button>
			</div>
		);
	}
}

export default connect(mapStateToProps)(MarkerMap);
