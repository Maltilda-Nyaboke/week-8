import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quotes:Quote[]=[
    new Quote{'lorem','mary', 0, 0},
    new Quote{'lorem','sandy',0,0}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
