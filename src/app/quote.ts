export class Quote {
    quote: string;
    author:string;
    upvotes:number;
    downvotes:number

    constructor(quote: string,author:string,upvotes:number,downvotes:number){
      this.quote = quote;
      this.author =author;
      this.upvotes = upvotes;
      this.downvotes = downvotes;  
    }

}
