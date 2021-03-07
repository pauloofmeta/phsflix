import { useCallback, useEffect, useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { IoFilterSharp } from "react-icons/io5";

import { stopHandle, toogleModal } from "../../actions/movieFilterActions";
import api from "../../Services/api";
import { Movie, MovieCard } from "../MovieCard";
import { MovieFilter } from "../MovieFilter";
import { Container, FilterButton, MovieListContainer, Title } from "./style";

interface MoviesPopularData {
  results: Movie[];
  total_pages: number;
  page: number;
}

interface MovieFilterParams {
  page: number;
  sort_by: string;
  with_genres?: string;
}

export function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading]= useState(false);

  const { isModalOpen, genresId, hasHandle } = useSelector<any, MovieFilter>(state => state.movieFilter, shallowEqual);
  const dispatch = useDispatch();


  const handleMovies = useCallback(async () => {
    setLoading(true);
    let params:MovieFilterParams = { page, sort_by: 'popularity.desc' };

    if (genresId.length > 0) {
      params = {...params, with_genres: genresId.join(',') }
    }

    const { data } = await api.get<MoviesPopularData>('/discover/movie', { params });
    setPage(page + 1);
    setHasNextPage((page <= data.total_pages));
    setLoading(false);
    setMovies([...movies, ...data.results]);
  }, [genresId, movies, page]);

  const paginateRef = useInfiniteScroll<HTMLDivElement>({
    loading,
    hasNextPage,
    onLoadMore: handleMovies
  });

  const openFilter = useCallback(() => {
    dispatch(toogleModal(true));
  }, [dispatch]);

  useEffect(() => {
    if (hasHandle) {
      setTimeout(() => {
        setPage(1);
        setMovies([]);
        dispatch(stopHandle());
      }, 300);
    }
  }, [hasHandle, handleMovies, dispatch]);

  return (
    <Container>
      <Title>
        <strong>Filmes Populares</strong>

        <FilterButton onClick={openFilter}>
          <p>Filtrar</p>
          <IoFilterSharp />
        </FilterButton>
      </Title>
      

      <MovieListContainer ref={paginateRef}>
        {movies.length > 0 && movies.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />)}

        {loading && <div>Carregando...</div>}
      </MovieListContainer>

      { isModalOpen && <MovieFilter /> }
    </Container>
  );
}