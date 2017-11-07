// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';

// ------------------------------------
// Actions
// ------------------------------------
/**
 * Actions
 * @param {any} value
 * @return {obj}
 */
export function increment(value = 1) {
    return {
        type: COUNTER_INCREMENT,
        payload: value,
    };
}

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk! */
/**
 * @return {obj}
 */
export const doubleAsync = () => {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            window.setTimeout(() => {
                dispatch({
                    type: COUNTER_DOUBLE_ASYNC,
                    payload: getState().counter,
                });
                resolve();
            }, 200);
        });
    };
};

export const actions = {
    increment,
    doubleAsync,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [COUNTER_INCREMENT]: (state, action) => state + action.payload,
    [COUNTER_DOUBLE_ASYNC]: (state, action) => state * 2,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0;
/**
 * 
 * @param {any} state
 * @param {any} action
 * @return {obj}
 */
export default function counterReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
