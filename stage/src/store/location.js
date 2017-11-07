// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE = 'LOCATION_CHANGE';

/**
 * Export Actions
 * @param {any} location
 * @return {object} Export Actions
 */
export function locationChange(location = '/') {
    return {
        type: LOCATION_CHANGE,
        payload: location,
    };
}

/**
 * Export Specialized Action Creator
 * @param {dispatch} location
 * @return {function} Export Specialized Action Creator
 */
export const updateLocation = ({ dispatch }) => {
    return (nextLocation) => dispatch(locationChange(nextLocation));
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null;
/**
 * Export Reducer
 * @param {state} state location
 * @param {action} action
 * @return {state} action.payload or state
 */
export default function locationReducer(state = initialState, action) {
    return action.type === LOCATION_CHANGE
        ? action.payload
        : state;
}
