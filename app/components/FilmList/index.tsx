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
        <Link prefetch="intent" title={film.title} to={`films/${film.id}`} key={film.id}>
          <Film filmData={film} />
        </Link>
      ))}
    </Grid>
  );
};

export default FilmList;
