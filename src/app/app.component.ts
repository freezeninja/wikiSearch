import { Component , Input} from '@angular/core';

import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private wiki: WikipediaService){}

  searchResult = [];

  onSearch(e: string){
    // console.log(e);
    // const result = this.wiki.search(e);
    // console.log(result);
    
    this.wiki.search(e).subscribe((res:any )=>{
      this.searchResult = res.query.search;
    })
  }
}
