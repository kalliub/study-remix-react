import type { IFilm } from 'common/film.interface';
import { Grid } from '@mui/material';

import Film from './Film';

interface IFilmListProps {
  filmListData: IFilm[];
}

const FilmList = ({ filmListData }: IFilmListProps) => {
  return (
    <Grid container justifyContent="flex-start">
      {filmListData.map((film) => (
        <Film key={film.id} filmData={film} />
      ))}
    </Grid>
  );
};

export default FilmList;
