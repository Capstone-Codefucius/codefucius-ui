import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  reviewername: string;
  reviewDate: Date;
  question1: number;

  ngOnInit(): void {
  }

  public submit() {
    debugger;
  }

}
