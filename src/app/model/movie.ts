import { Review } from "./review";

export interface Movie {
    imdbId: string;
    title: string;
    releaseDate: string;
    trailerLink: string;
    poster: string;
    genres: string[];
    backdrops: string[];
    reviewIds: Review[];
}