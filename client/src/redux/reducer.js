import { GET_VIDEOGAMES } from './actionsNames';

const initalState = {
    videogames: undefined,
}
function rootReducer(state = initalState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES: return {...state, videogames: action.payload};
        default: return state;
    }
}

export default rootReducer;