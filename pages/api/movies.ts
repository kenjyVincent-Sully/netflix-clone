import { API } from "./api";

export class Movie extends API {
  protected api_key: string = process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY ?? "";

  constructor() {
    super(process.env.NEXT_PUBLIC_PATH_API_URI ?? "");
  }

  getBaseParams(): any {
    return {
      api_key: this.api_key,
      language: "fr",
    };
  }

  getTopMovies(): Promise<any> {
    return this.get("/movie/top_rated", { ...this.getBaseParams(), page: 1 });
  }
  getTrending(): Promise<any> {
    return this.get("/trending/all/week", this.getBaseParams());
  }
  getTopRated(): Promise<any> {
    return this.get("/movie/top_rated", this.getBaseParams());
  }
  getGenres(genre: string): Promise<any> {
    const genreParam = genre ? { with_genres: genre } : {};
    const params = {
      ...this.getBaseParams(),
      ...genreParam,
    };
    return this.get("/discover/movie", params);
  }

  getDetails(id?: number): Promise<any> {
    return this.get(`/movie/${id}`, this.getBaseParams());
  }
}
