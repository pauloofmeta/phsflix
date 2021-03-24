import * as actionsType from "../actions/movieFilterActionTypes";

export function toogleModal(toogle: boolean, hasHandle: boolean = false): MovieFilterAction {
    return {
        type: actionsType.TOOGLE_MODAL,
        filter: { isModalOpen: toogle, genresId: [], hasHandle },

    }
}

export function setFilter(genresId: number[]): MovieFilterAction {
    localStorage.setItem("MOVIE_FILTER", JSON.stringify(genresId));

    return {
        type: actionsType.SET_FILTER,
        filter: { isModalOpen: false, genresId, hasHandle: true }
    }
}

export function stopHandle(): MovieFilterAction {
    return {
        type: actionsType.STOP_HANDLE,
        filter: { isModalOpen: false, genresId: [], hasHandle: false }
    }
}

export function clearFilter(): MovieFilterAction {
    localStorage.removeItem("MOVIE_FILTER");
    return {
        type: actionsType.CLEAR_FILTER,
        filter: { isModalOpen: false, genresId: [], hasHandle: false }
    }
}