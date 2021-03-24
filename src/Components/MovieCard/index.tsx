import { Link } from "react-router-dom";
import { MovieImage } from "../MovieImage";
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
      <Link to={`/movie/${movie.id}`}>
        <MovieImg>
          <MovieImage name={movie.title} size="w500" path={movie.poster_path} />
        </MovieImg>
        <MovieInfo>
          <strong>{movie.title}</strong>
          <p>{new Date(movie.release_date).getFullYear()}</p>
        </MovieInfo>
      </Link>
    </Container>
  );
}