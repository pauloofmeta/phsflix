import { useEffect, useState } from "react";
import api from "../../Services/api";
import { Chip, FilterChips } from "../FilterChips";
import { Button, CloseButton, Contianer, Overlay } from "./style";
import { IoClose } from "react-icons/io5";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setFilter, toogleModal, clearFilter } from "../../actions/movieFilterActions";

interface Genre {
  id: number;
  name: string;
}

export function MovieFilter() {
  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState(new Set<number>());

  const { genresId } = useSelector<any, MovieFilter>(state => state.movieFilter, shallowEqual);
  const dispatch = useDispatch();

  async function handleGenres() {
    const response = await api.get('/genre/movie/list');
    setGenres(response.data.genres);
  }

  useEffect(() => {
    setSelected(new Set(genresId))
  }, [genresId])

  useEffect(() => {
    handleGenres();
  }, []);

  function handleSelect(genreId: number) {
    const sel = new Set(selected);
    if (sel.has(genreId)) {
      sel.delete(genreId);
    } else {
      sel.add(genreId)
    }
    setSelected(sel);
  }

  function closeModal() {
    dispatch(toogleModal(false));
  }

  function handleFilter() {
    dispatch(setFilter(Array.from(selected)))
  }

  function handleClear() {
    dispatch(clearFilter())
  }

  return (
    <Overlay>
      <Contianer>
        <CloseButton type="button" onClick={closeModal}>
          <IoClose />
        </CloseButton>

        <strong>Gêneros</strong>
        <FilterChips>
            {genres.map((genre: Genre) => 
              <Chip
                key={genre.id}
                id={genre.id}
                text={genre.name}
                selected={selected.has(genre.id)}
                onSelect={() => handleSelect(genre.id)}
              />
            )}
        </FilterChips>

        <Button type="button" onClick={handleFilter}>
          Filtrar
        </Button>

        <Button type="button" outlined onClick={handleClear}>
          Limpar
        </Button>
      </Contianer>
    </Overlay>
  );
}