import type { IFilm } from 'common/film.interface';
import AppService from './AppService';

export default class FilmsService extends AppService {
  constructor() {
    super('films');
  }

  getAllFilms = (): Promise<IFilm[]> => {
    return this.api.get(this.root());
  };

  getFilm = (filmId: string): Promise<IFilm> => {
    return this.api.get(this.root(filmId));
  };
}
