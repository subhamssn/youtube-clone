import { createStore } from 'redux';

const reducerFn = (state = {lightTheme: true}, action) => {
    if (action.type === 'TOGGLE') {
        return { lightTheme: !state.lightTheme };    
    }
    return state;
}

const store = createStore(reducerFn);
export default store;