import { FILTER_BY_GENRES, FILTER_BY_NAME, GET_VIDEOGAMES } from './actionsNames';

const initalState = {
    videogames: undefined,
    copyVideogames: undefined
}
function rootReducer(state = initalState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES: return {
            ...state,
            videogames: action.payload,
            copyVideogames: action.payload
        };
        case FILTER_BY_NAME: {
            return {
                ...state,
                videogames: state.copyVideogames.filter(e => e.name.toLowerCase().includes(action.payload.toLowerCase()))
            }
        }
        case FILTER_BY_GENRES: {
            return {
                ...state,
                videogames: state.videogames
            }
        }
        default: return state;
    }
}

export default rootReducer;