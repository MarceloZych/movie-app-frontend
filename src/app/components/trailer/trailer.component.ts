import { Component } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-trailer',
  standalone: true,
  imports: [],
  templateUrl: './trailer.component.html',
  styleUrl: './trailer.component.css'
})
export class TrailerComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    public movieService: MovieService
  ){ 
    
    const imdbId = this.activatedRoute.snapshot.paramMap.get('imdbId');
    if ( imdbId ) {
      this.movieService.imdbId.set(imdbId);
    }
    console.log(imdbId);
    
  }

}
