



export class Quote {
  showDescription:boolean;
    quote: string;
    author:string;
    owner:string;
    upvotes:number;
    downvotes:number;
    postDate:Date;
  static upvotes: any;
    constructor(quote: string,author:string,owner:string,upvotes:number,downvotes:number,postDate:Date){
      this.quote = quote;
      this.author =author;
      this.owner = owner;
      this.upvotes = upvotes;
      this.downvotes = downvotes;
      this.postDate = postDate;
      this.showDescription = false;  
    }

}
