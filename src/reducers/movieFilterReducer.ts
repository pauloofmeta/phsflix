import * as actionsType from "../actions/movieFilterActionTypes";

function initialGenres(): number[] {
    const value = localStorage.getItem("MOVIE_FILTER");
    return value ? JSON.parse(value) : []
}

const initialState: MovieFilter = {
    isModalOpen: false,
    genresId: initialGenres(),
    hasHandle: false
}

const movieFilterReducer = (state: MovieFilter = initialState, action: MovieFilterAction): MovieFilter => {
    switch (action.type) {
        case actionsType.TOOGLE_MODAL:
            return {
                ...state,
                isModalOpen: action.filter.isModalOpen
            }

        case actionsType.SET_FILTER: {
            return action.filter
        }

        case actionsType.STOP_HANDLE: {
            return {
                ...state,
                hasHandle: action.filter.hasHandle
            }
        }
    }
    return state;
}

export default movieFilterReducer;