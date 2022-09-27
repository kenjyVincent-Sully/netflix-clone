export type Movie = {
  adult: boolean;
  id: number;
  backdrop_path: string | null;
  genre_ids: Array<number>;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Tv = {
  adult: boolean;
  id: number;
  first_air_date: string;
  backdrop_path: string | null;
  genre_ids: Array<number>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type: string;
};

export type Genre = {
  id: number;
  name: string;
};
export type Company = {
  description: string;
  headquarters: string;
  homepage: string;
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
  parent_company: null | object;
};
export type Country = {
  iso_3166_1: string;
  english_name: string;
};
export type Language = {
  iso_639_1: string;
  english_name: string;
  name: string;
};

export type MovieDetail = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: Company[];
  production_countries: Country[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export enum MediaType {
  Movie = "movie",
  Tv = "tv",
}
