



export class Quote {
  showDescription:boolean;
    quote: string;
    author:string;
    owner:string;
    upvotes:number;
    downvotes:number;
    postDate:Date;
  static upvotes: any;
    constructor(quote: string,author:string,owner:string,upvotes:number= 0,downvotes:number= 0,postDate:Date){
      this.quote = quote;
      this.author =author;
      this.owner = owner;
      this.upvotes = upvotes ||0
      this.downvotes = downvotes ||0
      this.postDate = postDate;
      this.showDescription = false;  
    }
    addVote(){
      this.upvotes++;
      }
      subVote(){
        this.downvotes++;
      }
}

