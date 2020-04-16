import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BlockScrollStrategy, FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { NONE_TYPE } from '@angular/compiler';
import { ReviewService } from './../services/review/review.service';
import { Review } from './../services/review/review';


import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RequestComponent } from '../code-request/code-request.component';
import { FeedbackComponent } from '../feedback/feedback.component';


export interface AwaitingTable {
  projectName: string;
  dueDate: string;
  requestTo: string;
  author: string;
}

/* const ELEMENT_DATA: AwaitingTable[] = [
  { projectName: 'Emily McDonald', dueDate: 'Reviewee', requestTo: "name", author: "name" },
  { projectName: 'Bill Smile', dueDate: 'Reviewee', requestTo: "name", author: "name" },
  { projectName: 'Will Desk', dueDate: 'Reviewee', requestTo: "name", author: "name" },
  { projectName: 'Smith Will', dueDate: 'Reviewee', requestTo: "name", author: "name" }
];
 */
@Component({
  selector: 'app-reviewee',
  templateUrl: './reviewee.component.html',
  styleUrls: ['./reviewee.component.scss'],

  animations: [
    trigger('openClose', [
      state('open', style({
        maxHeight: 400,
      })),
      state('closed', style({
        maxHeight: 0,
      })),
      transition('open <=> closed', [
        animate('0.2s')
      ]),
    ]),
  ],
})

export class RevieweeComponent implements OnInit {
  displayedColumns: string[] = ['projectName', 'dueDate', 'requestTo', 'author'];

  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  reviews: Array<Review>;
  awaiting: Array<Review>;
  inprogress: Array<Review>;
  completed: Array<Review>;

  reviewername: string;
  reviewDate: Date;
  question1: number;

  isOpenAwait = false;
  isOpenInProg = false;
  isOpenComp = false;
  reviewHours = false;


  awaitNum = 0;
  inProgNum = 0;
  compNum = 0;



  toggleAwait() {
    this.isOpenInProg = false;
    this.isOpenComp = false;
    this.reviewHours = false;
    this.reviews = this.awaiting;
    this.awaitNum = this.reviews.length;
    document.getElementById('awaitNum').innerHTML = this.awaitNum.toString();
    this.isOpenAwait = !this.isOpenAwait;
  }
  toggleInProg() {
    this.isOpenAwait = false;
    this.isOpenComp = false;
    this.reviewHours = false;
    this.inProgNum = this.reviews.length;
    this.reviews = this.inprogress;

    document.getElementById('inProgNum').innerHTML = this.inProgNum.toString();
    this.isOpenInProg = !this.isOpenInProg;
  }
  toggleComp() {
    this.isOpenAwait = false;
    this.isOpenInProg = false;
    this.reviewHours = false;
    this.reviews = this.completed;

    this.compNum = this.reviews.length;
    document.getElementById('compNum').innerHTML = this.compNum.toString();
    this.isOpenComp = !this.isOpenComp;
  }
  toggleReview() {
    this.isOpenAwait = false;
    this.isOpenInProg = false;
    this.isOpenComp = false;
    this.reviewHours = !this.reviewHours;
  }


  constructor(public dialog: MatDialog, private ReviewService: ReviewService) { }

  requestOpen(): void {
    const dialogRef = this.dialog.open(RequestComponent, { panelClass: 'custom-dialog-container' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  requestOpenFeedback(): void {
    const dialogRef = this.dialog.open(FeedbackComponent, { panelClass: 'custom-dialog-container' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.ReviewService.getAll().subscribe(res => {
      this.reviews = res;
      this.awaiting = [];
      this.inprogress = [];
      this.completed = [];

      for (let i = 0; i < this.reviews.length; ++i) {
        if (this.reviews[i].status == 'Awaiting') {
          this.awaiting.push(this.reviews[i]);
        }
        if (this.reviews[i].status == 'In-progress') {
          this.inprogress.push(this.reviews[i]);
        }
        if (this.reviews[i].status == 'Completed') {
          this.completed.push(this.reviews[i]);
        }
      }
    })
  }

}