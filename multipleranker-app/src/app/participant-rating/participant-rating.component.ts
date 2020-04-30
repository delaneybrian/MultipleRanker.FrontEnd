import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-participant-rating',
  templateUrl: './participant-rating.component.html',
  styleUrls: ['./participant-rating.component.css']
})
export class ParticipantRatingComponent implements OnInit {
  @Input() participantRating;
  constructor() { }

  ngOnInit(): void {
  }

}
