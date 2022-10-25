import type { LoaderFunction } from '@remix-run/node';
import invariant from 'tiny-invariant';

import CharactersService from 'api/CharactersService';
import { useCatch, useLoaderData } from '@remix-run/react';
import type { IFilmCharacter } from 'common/film.interface';
import { Grid, Box } from '@mui/material';
import ErrorAlert from 'components/ErrorAlert';

export const loader: LoaderFunction = async ({ params }) => {
  const charactersService = new CharactersService();
  const { characterId } = params;
  invariant(characterId, 'Expected characterId');
  return charactersService.getCharacter(characterId);
};

export const ErrorBoundary = ({ error }: { error: Error }) => (
  <ErrorAlert error={error} />
);

export const CatchBoundary = () => {
  const caught = useCatch();
  if (caught.status === 404) {
    return (
      <ErrorAlert
        title={caught.statusText}
        body={`${caught.status} ${caught.statusText}`}
      />
    );
  }

  return (
    <ErrorAlert
      title="Unknown Error!"
      body={`${caught.status} ${caught.statusText}`}
    />
  );
};

const Character = () => {
  const { name, gender, age, eyeColor, hairColor } =
    useLoaderData<IFilmCharacter>();
  return (
    <Grid container flexDirection="column">
      <h2>Character Details</h2>
      <Box sx={{ boxShadow: '2px 5px 12px #cbcbcb', px: 2 }}>
        <h3>{name}</h3>
        <ul>
          <li>Gender: {gender}</li>
          <li>Age: {age}</li>
          <li>Eye Color: {eyeColor}</li>
          <li>Hair Color: {hairColor}</li>
        </ul>
      </Box>
    </Grid>
  );
};

export default Character;
