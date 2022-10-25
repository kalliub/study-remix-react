import type { LoaderFunction } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';

import type { IFilm } from 'common/film.interface';
import FilmsService from 'api/FilmsService';
import PageContainer from 'layout/PageContainer';

import CharacterList from 'components/CharacterList';
import FilmBanner from 'components/Filmbanner';
import { Grid } from '@mui/material';

export const loader: LoaderFunction = ({ params }) => {
  invariant(params.filmId, 'Expected Film ID.');
  const filmsService = new FilmsService();
  return filmsService.getFilm(params.filmId);
};

const FilmPage = () => {
  const filmData = useLoaderData<IFilm>();
  return (
    <div>
      <FilmBanner filmData={filmData} />
      <PageContainer>
        <span>&emsp;{filmData.description}</span>
        <Grid container>
          <Grid item xs={6}>
            <CharacterList characters={filmData.characters} />
          </Grid>
          <Grid item xs={6}>
            <Outlet />
          </Grid>
        </Grid>
      </PageContainer>
    </div>
  );
};

export default FilmPage;
