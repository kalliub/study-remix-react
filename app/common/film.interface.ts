export interface IFilmCharacter {
  id: string;
  name: string;
  gender?: string;
  age?: string;
  eyeColor?: string;
  hairColor?: string;
}

export interface IFilm {
  id: string;
  title: string;
  originalTitle: string;
  originalTitleRomanised: string;
  image: string;
  movieBanner: string;
  description: string;
  director: string;
  producer: string;
  runningTime: string;
  rtScore: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
  characters?: IFilmCharacter[];
}
