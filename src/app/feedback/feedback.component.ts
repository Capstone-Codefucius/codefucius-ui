import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  // binding
  reviewername: string;
  reviewDate: Date;
  question1: number;

  /*constructor() { 
    this.reviewername = "test2"
  }*/

  ngOnInit(): void {
  }

  public submit() {
    debugger;
  }

}
