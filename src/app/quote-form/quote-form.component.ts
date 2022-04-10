import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  [x: string]: any;
newQuote = new Quote('','','', 0 , 0,new Date( ));

  author ="";
  quotes:Quote[]=[
    new Quote('lorem','sandy','tilda', 0, 0,new Date(12,3,2020)),
    new Quote('lorem','mary','tilda', 0, 0,new Date(12,3,2020)),
    new Quote('fourth','john','tilda', 0,0,new Date(12,3,2020)),
    new Quote('five','mary','tilda', 0, 0,new Date(12,3,2020))
  ]
create(){
  let quoteLength = this.quotes.length;
  this.quotes.push(this.newQuote)
}
@Output() addQuote = new EventEmitter<Quote>()
 submitQuote(){
  this.addQuote.emit(this.newQuote);
    }
    upvotes:number = 0;
    downvotes:number = 0;
    addVote(){
    this.upvotes++
    }
    subVote(){
      this.downvotes++;
    }



  constructor() { }

  ngOnInit(): void {
  }

}
