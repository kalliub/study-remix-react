import type { IFilm } from 'common/film.interface';
import { Grid } from '@mui/material';

import Film from './Film';

interface IFilmListProps {
  filmListData: IFilm[];
}

const FilmList = ({ filmListData }: IFilmListProps) => {
  return (
    <Grid container spacing={5} justifyContent="space-around">
      {filmListData.map((film) => (
        <Film key={film.id} filmData={film} />
      ))}
    </Grid>
  );
};

export default FilmList;
