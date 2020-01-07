import { Action } from 'redux';
import { ActionType, setTreeMarkers, SetTreeMarkersAction } from '../Actions';
import { TreeMarker } from '../State';

export default function markersReducer(state: TreeMarker[] = [], action: Action): TreeMarker[] {
	switch (action.type) {
	case ActionType.SET_TREE_MARKERS:
		return setTreeMarkers(state, action as SetTreeMarkersAction);
	default:
		return state;
	}
}
