export const INITIAL_STATE = {
    isDelay: false,
};

export const isDelayReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SWITCH_DELAY':
            return { ...state, isDelay: !state.isDelay}
        default:
            return state;
    }
};
