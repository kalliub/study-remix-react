import { Grid } from '@mui/material';

import type { IFilm } from 'common/film.interface';
import MouseHoverWrapper from 'components/MouseHoverWrapper';
import { useState } from 'react';

const FILM_BLOCK_WIDTH = 200;

const Film = ({ filmData }: { filmData: IFilm }) => {
  const [mouseHover, setMouseHover] = useState(false);
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
      <MouseHoverWrapper onHover={(isHover) => setMouseHover(isHover)}>
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
          <img
            src={filmData.image}
            alt={filmData.title}
            style={{ width: FILM_BLOCK_WIDTH, height: FILM_BLOCK_WIDTH * 1.5, scale: mouseHover ? '1.15' : '1', transition: '2s' }}
          />
        </div>
        <span>{filmData.title}</span>
      </MouseHoverWrapper>
    </Grid>
  );
};

export default Film;
