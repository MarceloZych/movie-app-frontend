import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: WritableSignal<Movie[]> = signal([]);
  imdbId: WritableSignal<String> = signal('');

  constructor(
    private sanitizer: DomSanitizer,
    private httpClient: HttpClient
  ) {
    // console.log(this.movies());
    // console.log(this.imdbId());
  }

  movieApi = "http://localhost:8080/api/v1/movie";

  getMovie(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.movieApi);
  }

  selectedMovie: Signal<Movie> = computed(() => {
    const selectedMovie = this.movies().find(
      (data) => data.imdbId === this.imdbId()
    );

    if (selectedMovie) {
      return selectedMovie;
    }
    return this.defaultMovie();
  })

  getVideoId(url: String) {
    return url.substring(url.indexOf("?v=") + 3);
  }

  embedTrailerLink = computed(() => {
    if (this.selectedMovie()) {
      const videoId = this.getVideoId(this.selectedMovie()!?.trailerLink);
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/watch?v=${videoId}`);
    }
    console.log(this.sanitizer.bypassSecurityTrustResourceUrl(''));
    
   
    return this.sanitizer.bypassSecurityTrustResourceUrl('');
  });

  defaultMovie(): Movie {
    return {
      imdbId: '',
      poster: '',
      releaseDate: '',
      title: '',
      trailerLink: '',
      backdrops: [],
      genres: [],
      reviewIds: [],
    }
  }
}