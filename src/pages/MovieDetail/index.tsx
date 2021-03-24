import { useCallback, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router";
import { MovieImage, movieImageSrc } from "../../Components/MovieImage";
import { Rating } from "../../Components/Rating";
import api from "../../Services/api";
import { Container, MovieInfo, MoviePoster, MovieHeader, MovieTitleContainer, MovieTitle, MovieOptions } from "./style";

interface MovieDetailParams {
	id: string;
}

interface Genre {
	id: number;
	name: string;
}

// interface Provider {
// 	provider_name: string;
// 	logo_path: string;
// }

// interface WatchProvider {
// 	flatrate: Provider[];
// }

interface Movie {
	id: number;
	title: string;
	poster_path: string;
	backdrop_path: string;
	release_date: string;
	runtime: number;
	genres: Genre[];
	overview: string;
	vote_average: number;
}

export function MovieDetail() {
  const { id } = useParams<MovieDetailParams>();
	const [ movie, setMovie ] = useState<Movie>();

	const handleMovie = useCallback(async () => {
		const response = await api.get<Movie>(`/movie/${id}`,
			{ params: { append_to_response: 'videos,images,watch/providers'}});
		console.log(response.data.vote_average);
		setMovie(response.data);
	}, [id]);

	useEffect(() => {
		handleMovie();
	}, [id, handleMovie]);

	function timeStr(runtime: number) {
		const hours = Math.floor(runtime / 60);
		const minutes = runtime % 60;
		return `${hours}h ${minutes}m`;
	}

  return (
		<Container>
			{ movie &&
				<MovieTitleContainer img={movieImageSrc(movie.backdrop_path, 'w1920_and_h800_multi_faces', movie.poster_path)}>
					<div className="titleContainerWrapper">
						<MovieHeader>
							<MoviePoster>
								<MovieImage name={movie.title} size="w500" path={movie.poster_path} />
							</MoviePoster>

							<MovieTitle>
								<div className="titleTop">
									<strong>{movie.title}</strong>
									<p>({new Date(movie.release_date).getFullYear()})</p>
								</div>
								
								<div className="titleInfo">
									{ movie.runtime > 0 && <span>{timeStr(movie.runtime)}</span> }
									
									{ (movie.genres && movie.genres.length > 0) && 
										<ul className="genres">
											{movie.genres.map(genre => 
												<li key={genre.id}>{genre.name}</li>
											)}
										</ul>
									}
								</div>
							</MovieTitle>

							<MovieOptions>
								<ReactStars
									size={20}
									count={5}
									isHalf={true}
									edit={true}
									value={7}
									onChange={(nu) => console.log(nu)}
								/>

								<Rating />
							</MovieOptions>

							<MovieInfo>
								<div className="overview">
									<strong>Sinopse</strong>
									<p>{movie.overview}</p>
								</div>
							</MovieInfo>
						</MovieHeader>
					</div>
				</MovieTitleContainer>
      }
		</Container>
	);
}
