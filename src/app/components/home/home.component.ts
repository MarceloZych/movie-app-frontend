import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Movie } from '../../model/movie';
import { MovieService } from '../../service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, NgbCarouselModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public movieList$!: Observable<Movie[]>;

  constructor(private movieService: MovieService, private router: Router) { }
  
  ngOnInit() {
    this.movieList$ = this.movieService.getMovie();
  }
  // handler
  hanldeReviewButton(imdbId: string) {
    this.router.navigate(['trailer', imdbId]);
  }
  handlePlayButton(imdbId: string) {
    this.router.navigate(['review', imdbId]);
  }
}
