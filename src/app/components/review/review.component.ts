import { Component } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  constructor(
    public movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) {
    const imdbId = this.activatedRoute.snapshot.paramMap.get('imdbId');
    if (imdbId) {
      this.movieService.imdbId.set(imdbId);
    }
  }
}
