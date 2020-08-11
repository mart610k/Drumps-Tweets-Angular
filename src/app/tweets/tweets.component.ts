import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';
import { Search } from "./searchEnum";


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  wordTyped: string = "";
  currentSearch: Search = Search.text;
  twat: Tweet[];
  constructor(tService: TweetsService) {
    this.twat = tService.tweets;
    console.log(this.twat.length);
  }
  searchbarEvents(event) {
    this.wordTyped = event.target.value;
  }
  search(tweet: Tweet): Boolean {
    let toReturn: Boolean = false;
   
    if (this.wordTyped === "" || this.wordTyped === undefined) {
      toReturn = false;
    }
    else {
      let contentInfield : string ="";
      switch (this.currentSearch) {

        case Search.text:
          contentInfield = tweet.text.toLowerCase();
          break;
        case Search.likes:
          contentInfield = tweet.likes.toString().toLowerCase();
         break;
         case Search.date:
           contentInfield = tweet.date.toString().toLowerCase();
           break;
          default:
            break;
      }
      toReturn = contentInfield.includes(this.wordTyped)
    }
    return toReturn;
  }
  ngOnInit() {
  }

}
