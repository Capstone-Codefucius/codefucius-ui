import { Component, OnInit } from '@angular/core';
//
import { ReviewService } from './services/review/review.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [trigger('triggerName'), [state('stateName', style()) transition('stateChangeExpression', [Animation Steps])] ]
})

/* export class AppComponent {
  title = 'codefucius-ui';
} */


export class AppComponent implements OnInit {
  title = 'app';
  reviews: Array<object>;

  constructor(private ReviewService: ReviewService ) { }

  ngOnInit() {
    this.ReviewService.get().subscribe(res => {
      this.reviews = res;
    });

    // this.ReviewService.getAwaiting().subscribe(res => {
    //   this.reviews = res;
    // }); 

    // this.ReviewService.getInProgress().subscribe(res => {
    //   this.reviews = res;
    // }); 

    // this.ReviewService.getCompleted().subscribe(res => {
    //   this.reviews = res;
    // }); 
  }
}