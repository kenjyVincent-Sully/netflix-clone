import { MediaType } from "../../types/Movie";
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

  getGenresLists(mediaType: MediaType): Promise<any> {
    return this.get(`/genre/${mediaType}/list`, this.getBaseParams());
  }

  getNetflixOriginals(mediaType: MediaType): Promise<any> {
    const networks = { with_networks: "213" };
    const params = {
      ...this.getBaseParams(),
      ...networks,
    };
    return this.get(`/discover/${mediaType}`, params);
  }
  getTrending(mediaType: MediaType): Promise<any> {
    return this.get(`/trending/${mediaType}/week`, this.getBaseParams());
  }
  getTopRated(mediaType: MediaType): Promise<any> {
    return this.get(`/${mediaType}/top_rated`, this.getBaseParams());
  }
  getGenre(genre: string, mediaType: MediaType): Promise<any> {
    const genreParam = genre ? { with_genres: genre } : {};
    const params = {
      ...this.getBaseParams(),
      ...genreParam,
    };
    return this.get(`/discover/${mediaType}`, params);
  }

  getDetails(id: number, mediaType: MediaType): Promise<any> {
    return this.get(`/${mediaType}/${id}`, this.getBaseParams());
  }
  getSimilarMovies(id: number, mediaType: MediaType): Promise<any> {
    return this.get(`/${mediaType}/${id}/similar`, this.getBaseParams());
  }

  getCertification(): Promise<any> {
    return this.get("/certification/movie/list", this.getBaseParams());
  }
}
