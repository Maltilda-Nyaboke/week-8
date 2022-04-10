import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  // @Input() quote: Quote;
  @Output() addQuote = new EventEmitter<Quote>()
   submitQuote(){
    this.addQuote.emit(this.newQuote);
      }
      
newQuote = new Quote('','','', 0 , 0,new Date( ));

  author ="";
  quotes:Quote[]=[
    new Quote('“When you have a dream, you’ve got to grab it and never let go.”','Carol Burnett','tilda', 0, 0,new Date(12,3,2020)),
    new Quote('“Nothing is impossible. The word itself says ‘I’m possible!”','Audrey Hepburn','tilda', 0, 0,new Date(12,3,2020)),
    new Quote('“You define your own life. Don’t let other people write your script.”','Oprah Winfrey','tilda', 0,0,new Date(12,3,2020)),
    new Quote('“Spread love everywhere you go.”','Mother Teresa','tilda', 0, 0,new Date(12,3,2020))
  ]
create(){
  let quoteLength = this.quotes.length;
  this.quotes.push(this.newQuote)
}


    // addVote(){
    // this.upvotes++;
    // }
    // subVote(){
    //   this.downvotes++;
    // }



  constructor() { }

  ngOnInit(): void {
  }

}
