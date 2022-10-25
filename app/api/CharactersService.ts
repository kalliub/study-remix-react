import type { IFilmCharacter } from 'common/film.interface';
import AppService from './AppService';

export default class CharactersService extends AppService {
  constructor() {
    super('people');
  }

  getCharacter = (characterId: string): Promise<IFilmCharacter> => {
    return this.api.get(this.root(characterId));
  };
}
