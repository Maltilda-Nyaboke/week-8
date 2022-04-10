import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
newQuote = new Quote('','',0 , 0);

  author ="";
  quotes:Quote[]=[
    new Quote('lorem','sandy',0,0),
    new Quote('lorem','mary', 0, 0),
    new Quote('fourth','john',0,0),
    new Quote('five','mary', 0, 0)
  ]
create(){
  let quoteLength = this.quotes.length;
  this.quotes.push(this.newQuote)
}
@Output() addQuote = new EventEmitter<Quote>()
 submitQuote(){
  this.addQuote.emit(this.newQuote);
    }



  constructor() { }

  ngOnInit(): void {
  }

}
