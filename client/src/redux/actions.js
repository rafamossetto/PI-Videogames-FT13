import axios from 'axios';
import { FILTER_BY_NAME, GET_VIDEOGAMES, FILTER_BY_GENRES } from './actionsNames';

export function getVideogames() {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/videogames');
        dispatch({ type: GET_VIDEOGAMES, payload: response.data })
    }
}

export function filterByName(input) {
    return { type: FILTER_BY_NAME, payload: input };
}

export function filterByGenres(genre) {
    return { type: FILTER_BY_GENRES, payload: genre };
}