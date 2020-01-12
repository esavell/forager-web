import { Action } from 'redux';
import { ActionType } from './actionTypes';
import { TreeMarker } from '../state';
import { TreeType, Month } from '../spec';

export interface SetTreeMarkersAction extends Action {
	type: ActionType.SET_TREE_MARKERS;
	markers: any[];
}

export function setTreeMarkersAction(markers: any[]): SetTreeMarkersAction {
	return { type: ActionType.SET_TREE_MARKERS, markers };
}

export function setTreeMarkers(state: TreeMarker[], action: SetTreeMarkersAction): TreeMarker[] {
	//TODO proper checks and handling of bad data
	return action.markers?.map((marker) => {
		const convertedMarker: TreeMarker = {
			id: marker.id,
			type: marker.type as TreeType,
			location: {
				latitude: parseFloat(marker.location.latitude.toString()),
				longitude: parseFloat(marker.location.longitude.toString()),
			},
			seasonStart: Month.Jan, //TODO
			seasonEnd: Month.Dec, //TODO
			isCurbside: marker?.isCurbside === 'true',
			heightM: parseFloat(marker.heightMetres.toString()),
		};
		return convertedMarker;
	});
}
