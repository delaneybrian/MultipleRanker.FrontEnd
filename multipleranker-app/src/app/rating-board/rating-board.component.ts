import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-rating-board',
  templateUrl: './rating-board.component.html',
  styleUrls: ['./rating-board.component.css']
})
export class RatingBoardComponent implements OnInit {
  @Input() ratingBoard;
  constructor() { }

  ngOnInit(): void {
  }

}
