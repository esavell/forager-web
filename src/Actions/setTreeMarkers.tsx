import { Action } from 'redux';
import { ActionType } from './actionTypes';
import { Map, TreeMarker } from '../State';

export interface SetTreeMarkersAction extends Action {
	type: ActionType.SET_TREE_MARKERS;
	markers: TreeMarker[];
}

export function setTreeMarkersAction(markers: TreeMarker[]): SetTreeMarkersAction {
	return { type: ActionType.SET_TREE_MARKERS, markers };
}

export function setTreeMarkers(state: Map, action: SetTreeMarkersAction): Map {
	const map: Map = {
		...state,
		treeMarkers: action.markers,
	};
	return map;
}
