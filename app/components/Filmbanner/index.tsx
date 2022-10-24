import type { IFilm } from 'common/film.interface';
import { Link } from '@remix-run/react';
import { ChevronLeft } from '@mui/icons-material';
import { Button } from '@mui/material';

interface IFilmBanner {
  filmData: IFilm;
}

const FilmBanner = ({ filmData }: IFilmBanner) => {
  const { movieBanner, title, image } = filmData;
  return (
    <div style={{ position: 'relative', height: 275, width: '100%', overflow: 'hidden' }}>
      <img
        alt="banner"
        src={movieBanner}
        style={{
          position: 'absolute',
          top: 0,
          objectFit: 'cover',
          objectPosition: '0px 0px 0px 200px',
          height: '100%',
          width: '100%',
        }}
      />
      <Link to="/" prefetch="render">
        <Button variant="contained" sx={{ borderRadius: 10, margin: 2, textDecoration: 'none' }}>
          <ChevronLeft fontSize="large" />
          Go back
        </Button>
      </Link>
      <div
        style={{
          backgroundColor: 'rgba(255,255,255,0.75)',
          position: 'absolute',
          bottom: 0,
          padding: 20,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h1 style={{ color: '#1d2f6b', margin: 0 }}>{title}</h1>
      </div>
      <img
        src={image}
        alt={title}
        style={{
          position: 'absolute',
          height: '60%',
          bottom: 20,
          right: 20,
          objectFit: 'contain',
          borderRadius: 10,
        }}
      />
    </div>
  );
};

export default FilmBanner;
