import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'post'
})
export class PostPipe implements PipeTransform {

  transform(dateInput: any){
    let seconds:any = Math.floor(new Date()as any-dateInput/1000)
    let interval =Math.floor(seconds/3153600)
    // if (interval>1){
    //   return interval + 'year'
    // }
}
}
