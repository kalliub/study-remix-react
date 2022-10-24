import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import FilmsService from 'api/FilmsService';
import type { IFilm } from 'common/film.interface';
import FilmBanner from 'components/Filmbanner';
import PageContainer from 'layout/PageContainer';

export const loader: LoaderFunction = async ({ request }) => {
  const filmsService = new FilmsService();
  const url = new URL(request.url);
  const filmId = url.pathname.split('/films/')[1];
  return filmsService.getFilm(filmId);
};

const FilmPage = () => {
  const filmData = useLoaderData<IFilm>();
  return (
    <>
      <FilmBanner filmData={filmData} />
      <PageContainer>
        <span>&emsp;{filmData.description}</span>
      </PageContainer>
    </>
  );
};

export default FilmPage;
