import type { IFilm } from 'common/film.interface';
import { Grid } from '@mui/material';
import type { LinksFunction } from '@remix-run/node';
import style from './style.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: style,
  },
];

const Film = ({ filmData }: { filmData: IFilm }) => {
  return (
    <Grid item display="flex" flexDirection="column" alignContent="center" alignItems="center" textAlign="center" className="catalog-film">
      <img src={filmData.image} alt={filmData.title} style={{ borderRadius: 10, height: 300 }} />
      <span style={{ marginTop: 5, maxWidth: '80%' }}>{filmData.title}</span>
    </Grid>
  );
};

export default Film;
