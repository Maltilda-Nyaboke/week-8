import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  quotes:Quote[]=[
    new Quote('lorem','mary', 0, 0),
    new Quote('lorem','sandy',0,0)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
