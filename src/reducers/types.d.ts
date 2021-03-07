interface MovieFilter {
    isModalOpen: boolean;
    genresId: number[];
    hasHandle: boolean;
}

type MovieFilterAction = {
    type: string;
    filter: MovieFilter;
}

type DispatchType = (args: MovieFilterAction) => MovieFilterAction;