import isDelayReducer from './isDelayReducer';

const combineReducer = (reducers) => {
    const reducerKeys = Object.keys(reducers);
    let objInitState = {}; //put states of all the Reducers

    // check if all the states have default value
    reducerKeys.forEach((key) => {
        const initState = reducers[key](undefined, { type: '' });
        if (initState === 'undefined') {
            throw new Error(`${key} does not return state.`);
        }
        objInitState[key] = initState;
    });

    // combineReducer 會回傳一個和 Reducer 一樣的純函數，會接收 action 做事情
    return (state, action) => {
        if (action) {
            // 將該指令分別給所有的 Reducer 執行
            reducerKeys.forEach((key) => {
                const previousState = objInitState[key];
                // 執行完後把回傳的 state 再收回保管全部 state 的 objInitState 中
                objInitState[key] = reducers[key](previousState, action);
            });
        }

        // 沒有給 action 或有經過處理，都回傳一個新的 objInitState
        return { ...objInitState };
    };
};

const reducers = combineReducer({
    isDelay: isDelayReducer,
});

export default reducers;
