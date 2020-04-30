import { Component, OnInit } from '@angular/core';
import { ratingsList } from '../ratingList';

@Component({
  selector: 'app-ratings-list',
  templateUrl: './ratings-list.component.html',
  styleUrls: ['./ratings-list.component.css']
})
export class RatingsListComponent implements OnInit {
  ratingsList = ratingsList;
  
  constructor() { }

  ngOnInit(): void {
  }

}
