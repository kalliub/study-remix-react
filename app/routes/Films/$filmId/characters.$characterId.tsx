import type { LoaderFunction } from '@remix-run/node';
import invariant from 'tiny-invariant';

import CharactersService from 'api/CharactersService';
import { useLoaderData } from '@remix-run/react';
import type { IFilmCharacter } from 'common/film.interface';
import { Grid, Box } from '@mui/material';

export const loader: LoaderFunction = async ({ params }) => {
  const charactersService = new CharactersService();
  const { characterId } = params;
  invariant(characterId, 'Expected characterId');

  return charactersService.getCharacter(characterId);
};

const Character = () => {
  const { name, gender, age, eyeColor, hairColor } = useLoaderData<IFilmCharacter>();
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
