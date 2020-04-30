import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RatingsComponent } from './ratings/ratings.component';
import { RatingBoardComponent } from './rating-board/rating-board.component';
import { RatingsListComponent } from './ratings-list/ratings-list.component';
import { ParticipantRatingComponent } from './participant-rating/participant-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingsComponent,
    RatingBoardComponent,
    RatingsListComponent,
    ParticipantRatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
