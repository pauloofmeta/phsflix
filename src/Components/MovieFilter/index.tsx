import { useEffect, useState } from "react";
import api from "../../Services/api";
import { Chip, FilterChips } from "../FilterChips";
import { Button, Contianer, Overlay } from "./style";

interface Genre {
  id: number;
  name: string;
}

export function MovieFilter() {
  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState(new Set());

  async function handleGenres() {
    const response = await api.get('/genre/movie/list');
    setGenres(response.data.genres);
  }

  useEffect(() => {
    handleGenres();
  }, []);

  function handleSelect(genre: Genre) {
    const sel = new Set(selected);
    if (sel.has(genre)) {
      sel.delete(genre);
    } else {
      sel.add(genre)
    }
    setSelected(sel);
  }

  function handleFilter() {
    console.log(selected);
  }

  return (
    <Overlay>
      <Contianer>
        <strong>Gêneros</strong>
        <FilterChips>
            {genres.map((genre: Genre) => 
              <Chip
                key={genre.id}
                id={genre.id}
                text={genre.name}
                selected={selected.has(genre)}
                onSelect={() => handleSelect(genre)}
              />
            )}
        </FilterChips>

        <Button type="button" onClick={handleFilter}>
          Filtrar
        </Button>
      </Contianer>
    </Overlay>
  );
}