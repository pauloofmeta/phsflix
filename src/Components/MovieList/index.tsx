import { useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import api from "../../Services/api";
import { Movie, MovieCard } from "../MovieCard";
import { MovieFilter } from "../MovieFilter";
import { Container, FilterButton, MovieListContainer, Title } from "./style";

interface MoviesPopularData {
  results: Movie[];
  total_pages: number;
  page: number;
}

export function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading]= useState(false);
  const [filterOpen, setFilterOpen] = useState(false);


  async function handleMovies() {
    setLoading(true);
    const { data } = await api.get<MoviesPopularData>('/discover/movie', { params: { page, sort_by: 'popularity.desc' } });
    setPage(page + 1);
    setHasNextPage((page <= data.total_pages));
    setLoading(false);
    setMovies([...movies, ...data.results]);
  }

  const paginateRef = useInfiniteScroll<HTMLDivElement>({
    loading,
    hasNextPage,
    onLoadMore: handleMovies
  });

  function openFilter() {
    setFilterOpen(true);
  }

  return (
    <Container>
      <Title>
        <strong>Filmes Populares</strong>

        <FilterButton onClick={openFilter}>
          Filtrar
        </FilterButton>
      </Title>
      

      <MovieListContainer ref={paginateRef}>
        {movies.length > 0 && movies.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />)}

        {loading && <div>Carregando...</div>}
      </MovieListContainer>

      { filterOpen && <MovieFilter /> }
    </Container>
  );
}