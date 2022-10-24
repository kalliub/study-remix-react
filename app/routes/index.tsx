import React, { useState } from 'react';
import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { pageTitle } from 'config/page';
import PageContainer from 'components/PageContainer';
import FilmList from 'components/FilmList/index';
import FilmsService from 'api/FilmsService';
import type { IFilm } from 'common/film.interface';
import { Button, Grid, TextField } from '@mui/material';

export const meta: MetaFunction = () => ({
  title: pageTitle('All Movies'),
});

export const loader: LoaderFunction = () => {
  const filmsService = new FilmsService();
  return filmsService.getAllFilms();
};

const Index = () => {
  const filmListData: IFilm[] = useLoaderData();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = () => {
    setSearchValue('');
  };

  return (
    <PageContainer>
      <h1>Studio Ghibli Movies</h1>
      <Grid container mb={5} alignItems="center">
        <TextField variant="outlined" onChange={(e) => setSearchValue(e.target.value)} />
        <Button size="small" variant="contained" onClick={handleSearchSubmit} sx={{ ml: 2, height: 40 }}>
          Search
        </Button>
      </Grid>
      <FilmList filmListData={filmListData} />
    </PageContainer>
  );
};

export default Index;
