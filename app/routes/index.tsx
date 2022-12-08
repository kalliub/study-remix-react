import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import type { IFilm } from 'common/film.interface';
import { pageTitle } from 'config/page';
import PageContainer from 'layout/PageContainer';
import FilmsService from 'api/FilmsService';

import FilmList from 'components/FilmList/index';
import FilmSearchEngine from 'components/FilmSearchEngine';

export const meta: MetaFunction = () => ({
  title: pageTitle('All Movies'),
});

export const loader: LoaderFunction = async ({ request }) => {
  const filmsService = new FilmsService();
  const url = new URL(request.url);
  const searchTitle = url.searchParams.get('title');
  const films = await filmsService.getAllFilms();
  return films.filter(({ title }) =>
    searchTitle ? title.toLowerCase().includes(searchTitle.toLowerCase()) : true
  );
};

const Index = () => {
  const filmListData: IFilm[] = useLoaderData();

  return (
    <PageContainer>
      <h1>Studio Ghibli Movies</h1>
      <FilmSearchEngine />
      <FilmList filmListData={filmListData} />
    </PageContainer>
  );
};

export default Index;
