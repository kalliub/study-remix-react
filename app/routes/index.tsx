import React from 'react';
import type { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';

import { pageTitle } from 'config/page';
import PageContainer from 'components/PageContainer';
import FilmList from 'components/FilmList/index';
import FilmsService from 'api/FilmsService';
import type { IFilm } from 'common/film.interface';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => ({
  title: pageTitle('All Movies'),
});

export const loader: LoaderFunction = () => {
  const filmsService = new FilmsService();
  return filmsService.getAllFilms();
};

const Index = () => {
  const filmListData: IFilm[] = useLoaderData();
  return (
    <PageContainer>
      <h1>Studio Ghibli Movies</h1>
      <FilmList filmListData={filmListData} />
    </PageContainer>
  );
};

export default Index;
