import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { ReviewComponent } from './components/review/review.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'trailer/:imdbId',
        component: TrailerComponent,
    },
    {
        path: 'review/:imdbId',
        component: ReviewComponent,
    },
];