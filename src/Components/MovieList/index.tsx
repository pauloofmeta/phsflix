import { useEffect, useState } from "react";
import api from "../../Services/api";
import { Movie, MovieCard } from "../MovieCard";
import { Container, MovieListContainer } from "./style";

export function MovieList() {
  const [movies, setMovies] = useState([]);


  async function handleMovies() {
    const response = await api.get('/movie/popular');
    console.log(response);
    setMovies(response.data.results);
  }

  useEffect(() => {
    handleMovies();
  }, []);

  return (
    <Container>
      <MovieListContainer>
        {movies.length > 0 && movies.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />)}
      </MovieListContainer>
    </Container>
  );
}