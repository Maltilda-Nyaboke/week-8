import { getLocaleEraNames } from '@angular/common';
import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]=[
    {quote:'lorem ipsum',author:'Mary'},
    {quote:'loem ipsum',author:'John'},
    {quote:'lorem ipum',author:'Grace'},
    {quote:'lorm ipsum',author:'Peter'},
    {quote:'lore ipsu',author:'Doe'}
  ]
}
