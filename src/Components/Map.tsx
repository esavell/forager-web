import React from 'react';
import MapboxMap, {Marker} from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';
const initialState: State = {
    viewport: {
        height: "80vw",
        width: "80vh",
        latitude: -43.52925795097041,
        longitude: 172.63467739519413,
        zoom: 11,
    },
};
const geoOptions: PositionOptions = {
    enableHighAccuracy: true
}

interface State {
    viewport: Viewport
    userLocation?: LatLon
}

interface LatLon {
    latitude: number,
    longitude: number,
}

interface Viewport {
    height: number | string,
    width: number | string,
    zoom: number,
    latitude: number,
    longitude: number,
}

class Map extends React.Component<{}, State> {
    public state: State = initialState;

    public componentDidMount() {
        window.addEventListener('resize', this.resize);
        this.resize();
        this.setUserLocation();
    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    private changeViewport = (viewport: Viewport) => {
        this.setState(prevState => ({
            viewport: { ...prevState.viewport, ...viewport },
        }));
    };

    private resize = () => {
        this.setState(prevState => ({
            viewport: {
                ...prevState.viewport,
                height: window.innerHeight,
                width: window.innerWidth,
            },
        }));
    };

    private setUserLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            let userLocation: LatLon = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
             };
             this.setState({
               userLocation: userLocation
            });
         }, () => {},
         geoOptions);
    }

    public render() {
        const { viewport } = this.state;
        return (
            <MapboxMap
                {...viewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                onViewportChange={(v: Viewport) => this.changeViewport(v)}
            >
                { this.state.userLocation &&
                <Marker {...this.state.userLocation}>
                    <svg width={20} height={20}> <circle cx={10} cy={10} r={10} fill="red" /> </svg>
                </Marker>
                }
            </MapboxMap>
        );
    }
}

export default Map;