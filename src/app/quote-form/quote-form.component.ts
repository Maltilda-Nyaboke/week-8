import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  author ="";
  quotes:Quote[]=[
    new Quote('lorem','sandy',0,0),
    new Quote('lorem','mary', 0, 0)
  ]
create(i){

}
// @Output() addQuote = new EventEmitter<Quote>()
// submitQuote(){
//   this.addQuote.emit(this.quote);
//     }
  constructor() { }

  ngOnInit(): void {
  }

}
