



export class Quote {
  showDescription:boolean;
    quote: string;
    author:string;
    owner:string;
    upvotes:number;
    downvotes:number;
  static upvotes: any;
    constructor(quote: string,author:string,owner:string,upvotes:number,downvotes:number){
      this.quote = quote;
      this.author =author;
      this.owner = owner;
      this.upvotes = upvotes;
      this.downvotes = downvotes;
      this.showDescription = false;  
    }

}
