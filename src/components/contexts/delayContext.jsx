import React from 'react';

const delayContext = React.createContext();

const INITIAL_DELAY_STATE = false;

// const delayReducer = (state = INITIAL_DELAY_STATE, action) => {
//     switch (action.type) {
//         case 'SWITCH_DELAY':
//             return { ...state, isDelay: !state.isDelay };
//         default:
//             return state;
//     }
// };

export { INITIAL_DELAY_STATE };
export default delayContext;
