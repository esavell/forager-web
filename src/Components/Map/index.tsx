import React from 'react';
import './index.css';
import MapboxMap, { Marker } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCrosshairs,
	faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';
const initialState: State = {
	viewport: {
		height: '80',
		width: '100',
		latitude: -43.52925795097041,
		longitude: 172.63467739519413,
		zoom: 11,
	},
	trackUser: false,
};
const geoOptions: PositionOptions = {
	enableHighAccuracy: true,
};

interface State {
	viewport: Viewport;
	trackUser: boolean;
	userLocation?: LatLon;
}

interface LatLon {
	latitude: number;
	longitude: number;
}

interface Viewport {
	height: number | string;
	width: number | string;
	zoom: number;
	latitude: number;
	longitude: number;
}

const red = '#63161a';
const green = '#16635b';
//const brown = "#633a16";

class Map extends React.Component<({}), State> {
	constructor(props: {}) {
		super(props);
		this.state = initialState;
	}

	public componentDidMount(): void {
		window.addEventListener('resize', this.resize);
		this.resize();
		this.state.trackUser && this.setUserLocation();
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
				this.setState({
					trackUser: true,
					userLocation: userLocation,
				});
			},
			() => { 
				//TODO: Could not locate error 
			},
			geoOptions,
		);
	};

	private toggleUserLocation: () => void = () => {
		if (this.state.trackUser) {
			this.setState({ trackUser: false, userLocation: undefined });
		} else {
			this.setUserLocation();
		}
	};

	public render(): JSX.Element {
		return (
			<div className="mapContainer" tabIndex={-1}>
				<MapboxMap
					className="map"
					{...this.state.viewport}
					mapboxApiAccessToken={MAPBOX_TOKEN}
					onViewportChange={this.changeViewport}>
					{this.state.userLocation && (
						<Marker {...this.state.userLocation}>
							<FontAwesomeIcon
								icon={faShoppingBasket}
								color={red}
							/>
						</Marker>
					)}
				</MapboxMap>
				<button
					className="trackButton"
					onClick={this.toggleUserLocation}
					tabIndex={1}>
					<FontAwesomeIcon
						icon={faCrosshairs}
						color={this.state.trackUser ? red : green}
					/>
				</button>
			</div>
		);
	}
}

export default Map;
