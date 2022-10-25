import { useState } from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { useTransition } from '@remix-run/react';

import type { IFilm } from 'common/film.interface';
import MouseEventWrapper from 'components/MouseEventWrapper';

const FILM_BLOCK_WIDTH = 200;

const Film = ({ filmData }: { filmData: IFilm }) => {
  const [mouseHover, setMouseHover] = useState(false);
  const transition = useTransition();
  return (
    <Grid
      item
      display="flex"
      flexDirection="column"
      alignContent="center"
      alignItems="center"
      maxWidth={FILM_BLOCK_WIDTH}
      textAlign="center"
      mr={4}
      my={1}
    >
      <MouseEventWrapper onHover={(isHover) => setMouseHover(isHover)}>
        <div
          style={{
            overflow: 'hidden',
            width: FILM_BLOCK_WIDTH,
            height: FILM_BLOCK_WIDTH * 1.5,
            objectFit: 'cover',
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          {transition.state === 'loading' && transition.location.pathname === `/films/${filmData.id}` ? (
            <CircularProgress />
          ) : (
            <img
              src={filmData.image}
              alt={filmData.title}
              style={{
                width: FILM_BLOCK_WIDTH,
                height: FILM_BLOCK_WIDTH * 1.5,
                scale: mouseHover ? '1.15' : '1',
                transition: '2s',
              }}
            />
          )}
        </div>
        <span>{filmData.title}</span>
      </MouseEventWrapper>
    </Grid>
  );
};

export default Film;
