import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuoteDetailComponent } from '../quote-detail/quote-detail.component';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  [x: string]: any;
  
  @Input() quote: Quote;
  
  @Output() addQuote = new EventEmitter<Quote>()
   submitQuote(){
    this.addQuote.emit(this.newQuote);
      }
      
newQuote = new Quote('','','', 0 , 0,new Date( ));

  author ="";
  quotes:Quote[]=[
    new Quote('“When you have a dream, you’ve got to grab it and never let go.”','Carol Burnett','Maltilda Nyaboke', 0, 0,new Date(2006,13,2020)),
    new Quote('“Nothing is impossible. The word itself says ‘I’m possible!”','Audrey Hepburn','Maltilda Nyaboke', 0, 0,new Date(2007,6,2020)),
    new Quote('“You define your own life. Don’t let other people write your script.”','Oprah Winfrey','Maltilda Nyaboke', 0,0,new Date(2012,3,2030)),
    new Quote('“Keep your face always toward the sunshine, and shadows will fall behind you."','Mother Teresa','Maltilda Nyaboke', 0, 0,new Date(2013,3,2020))
  ]
create(quote){
  let quo= quote.quote;
  let aut = quote.author;
  let own = quote.owner;
  let pos = quote.postDate;
  let quoteLength = this.quotes.length;
  // console.log(quote);
  
  this.quotes.push(this.newQuote)
}

deleteQuote(isRead: any, index: any) {
  if (isRead) {
    let toDelete = confirm(`Are you sure you want to delete this Quote?`);
    if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }
}
    // addVote(){
    // this.upvotes++;
    // }
    // subVote(){
    //   this.downvotes++;
    // }
    array: number[]=this.quotes.map(quote=> quote.upvotes)
    public highest=Math.max(...this.array)

  constructor() { }

  ngOnInit(): void {
  }

}
