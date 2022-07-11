const INITIAL_STATE = {
    theater: null
}

export function theaterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_THATER':
            return {
                ...state,
                theater: action.theater
            }

        default:
            return state;
    }
}