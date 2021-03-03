import { Container, MovieImg, MovieInfo } from "./style";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  backdrop_path: string;
}

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Container>
      <MovieImg>
        <img loading="lazy" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt={movie.title}/>
      </MovieImg>
      <MovieInfo>
        <strong>{movie.title}</strong>
        <p>{new Date(movie.release_date).toLocaleDateString()}</p>
      </MovieInfo>
    </Container>
  );
}