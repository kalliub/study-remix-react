import type { IFilm } from 'common/film.interface';
import AppService from './AppService';

export default class FilmsService extends AppService {
  constructor() {
    super('films');
  }

  getAllFilms = (): Promise<IFilm[]> => {
    return this.api.get(this.root());
  };

  getFilm = async (filmId: string): Promise<IFilm> => {
    const film: IFilm = await this.api.get(this.root(filmId));

    const characters = await Promise.all(
      film.people
        .filter((url) => url !== `${this.api.baseUrl}/people/`)
        .map((url) => {
          const path = new URL(url).pathname.slice(1);
          return this.api.get(path);
        })
    );
    return { ...film, characters };
  };
}
