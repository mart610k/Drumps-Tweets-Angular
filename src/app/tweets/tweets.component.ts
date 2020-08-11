import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  wordTyped : string = "";

  twat: Tweet[];
  constructor(tService: TweetsService) {
       this.twat = tService.tweets;
       console.log(this.twat.length);
   }
   searchbarEvents(event){
      this.wordTyped = event.target.value;
   }
   search(text : string) : Boolean{
     if(this.wordTyped === "" || this.wordTyped === undefined){
      return false; 
    }else{
      return text.toLowerCase().includes(this.wordTyped.toLowerCase());
    }
   }

  ngOnInit() {
  }

}
