import { useEffect, useState } from "react";
import api from "../../Services/api";
import { Button, Contianer, GenreChip, GenreList, Overlay } from "./style";

interface Genre {
  id: number;
  name: string;
}

export function MovieFilter() {
  const [genres, setGenres] = useState([]);

  async function handleGenres() {
    const response = await api.get('/genre/movie/list');
    setGenres(response.data.genres);
  }

  useEffect(() => {
    handleGenres();
  }, []);

  return (
    <Overlay>
      <Contianer>
        <strong>Gêneros</strong>
        <GenreList>
          {genres.map((genre: Genre) => <GenreChip key={genre.id}>{genre.name}</GenreChip>)}
        </GenreList>

        <Button type="button">
          Filtrar
        </Button>
      </Contianer>
    </Overlay>
  );
}