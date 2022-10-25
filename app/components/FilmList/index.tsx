import type { IFilm } from 'common/film.interface';
import { Grid } from '@mui/material';

import { Link } from '@remix-run/react';
import Film from './Film';

interface IFilmListProps {
  filmListData: IFilm[];
}

const FilmList = ({ filmListData }: IFilmListProps) => {
  return (
    <Grid container justifyContent="flex-start">
      {filmListData.map((film) => (
        <Film filmData={film} key={film.id} />
      ))}
    </Grid>
  );
};

export default FilmList;
