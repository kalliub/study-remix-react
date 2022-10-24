import { useState } from 'react';
import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData, useSearchParams } from '@remix-run/react';

import { pageTitle } from 'config/page';
import PageContainer from 'layout/PageContainer';
import FilmList from 'components/FilmList/index';
import FilmsService from 'api/FilmsService';
import type { IFilm } from 'common/film.interface';
import { Button, CircularProgress, Grid, TextField } from '@mui/material';

export const meta: MetaFunction = () => ({
  title: pageTitle('All Movies'),
});

export const loader: LoaderFunction = async ({ request }) => {
  const filmsService = new FilmsService();
  const url = new URL(request.url);
  const searchTitle = url.searchParams.get('title');
  const films = await filmsService.getAllFilms();
  return films.filter(({ title }) => (searchTitle ? title.toLowerCase().includes(searchTitle.toLowerCase()) : true));
};

const Index = () => {
  const filmListData: IFilm[] = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const titleParam = searchParams.get('title');
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [disabledSearch, setDisabledSearch] = useState(true);

  return (
    <PageContainer>
      <h1>Studio Ghibli Movies</h1>
      <form>
        <Grid container alignItems="center">
          <TextField
            onChange={(e) => setDisabledSearch(e.target.value.length === 0)}
            name="title"
            placeholder="Type a title..."
            variant="outlined"
          />
          <Button
            disabled={disabledSearch}
            type="submit"
            size="small"
            variant="contained"
            sx={{ ml: 2, height: 40 }}
            onClick={() => setLoadingSearch(true)}
          >
            {loadingSearch ? <CircularProgress sx={{ color: 'white' }} size={15} /> : 'Search'}
          </Button>
        </Grid>
      </form>
      <Grid container my={2} flexDirection="column">
        {titleParam && titleParam.length > 0 && (
          <>
            <span>
              Showing results for: &quot;<b>{titleParam}</b>&quot;.
            </span>
            <Button sx={{ width: 'fit-content' }} variant="text" onClick={() => setSearchParams({ title: '' })}>
              Clear results
            </Button>
          </>
        )}
      </Grid>
      <FilmList filmListData={filmListData} />
    </PageContainer>
  );
};

export default Index;
