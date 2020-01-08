import React from 'react';
import MapboxMap from 'react-map-gl';

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

class Map extends React.Component<{}, MapState> {
	constructor(props: {}) {
		super(props);
		this.state = initialState;
	}

	public componentDidMount(): void {
		window.addEventListener('resize', this.resize);
		this.resize();
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

	public render(): JSX.Element {
		return (
			<MapboxMap
				className="map"
				{...this.state.viewport}
				mapboxApiAccessToken={MAPBOX_TOKEN}
				onViewportChange={this.changeViewport}>
				{this.props.children}
			</MapboxMap>
		);
	}
}

export default Map;
