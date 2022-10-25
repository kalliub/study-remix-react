import { Button, Grid } from '@mui/material';
import { NavLink } from '@remix-run/react';
import type { IFilmCharacter } from 'common/film.interface';

interface ICharacterListProps {
  characters?: IFilmCharacter[];
}

const CharacterList = ({ characters = [] }: ICharacterListProps) => {
  if (characters.length === 0) return false;
  return (
    <Grid container flexDirection="column" alignItems="flex-start">
      <h2>Characters</h2>
      {characters.map((character) => (
        <NavLink
          prefetch="render"
          to={`characters/${character.id}`}
          key={character.id}
          style={({ isActive }) => ({
            backgroundColor: isActive ? 'rgba(0,0,0,0.07)' : undefined,
            borderRadius: 5,
          })}
        >
          <Button variant="text" sx={{ color: 'black' }}>
            {character.name}
          </Button>
        </NavLink>
      ))}
    </Grid>
  );
};

export default CharacterList;
