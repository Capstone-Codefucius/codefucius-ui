import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { RequestComponent } from '../code-request/code-request.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { ReviewService } from './../services/review/review.service';

export interface AwaitingTable {
  projectName: string;
  dueDate: string;
  requestTo: string;
  author: string;
}

const ELEMENT_DATA: AwaitingTable[] = [
  {projectName: 'Emily McDonald', dueDate: 'Reviewee', requestTo: "name", author: "name"},
  {projectName: 'Bill Smile', dueDate: 'Reviewee', requestTo: "name", author: "name"},
  {projectName: 'Will Desk', dueDate: 'Reviewee', requestTo: "name", author: "name"},
  {projectName: 'Smith Will', dueDate: 'Reviewee', requestTo: "name", author: "name"}
];

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.scss'],
  
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

export class ReviewerComponent implements OnInit {
  displayedColumns: string[] = ['projectName', 'dueDate', 'requestTo', 'author'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  reviews: Array<object>;

  reviewername : string;
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
    this.isOpenAwait = !this.isOpenAwait;
    this.ReviewService.getAwaiting().subscribe(res => {this.reviews = res;}); 
    this.awaitNum = this.reviews.length;
    document.getElementById('awaitNum').innerHTML = this.awaitNum.toString();
  }
  toggleInProg() {
    this.isOpenAwait = false;
    this.isOpenComp = false;
    this.reviewHours = false;
    this.isOpenInProg = !this.isOpenInProg;
    this.ReviewService.getInProgress().subscribe(res => {this.reviews = res;}); 
    this.inProgNum = this.reviews.length;
    document.getElementById('inProgNum').innerHTML = this.inProgNum.toString();
  }
  toggleComp() {
    this.isOpenAwait = false;
    this.isOpenInProg = false;
    this.reviewHours = false;
    this.isOpenComp = !this.isOpenComp;
    this.ReviewService.getCompleted().subscribe(res => {this.reviews = res;});
    this.compNum = this.reviews.length;
    document.getElementById('compNum').innerHTML = this.compNum.toString(); 
  }
  toggleReview() {
    this.isOpenAwait = false;
    this.isOpenInProg = false;
    this.isOpenComp = false;
    this.reviewHours = !this.reviewHours;
  }


  
  constructor(public dialog: MatDialog, private ReviewService: ReviewService) {}

  requestOpen(): void {
    const dialogRef = this.dialog.open(RequestComponent,{ panelClass: 'custom-dialog-container'});

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
    this.ReviewService.getAwaiting().subscribe(res => {this.reviews = res;}); 
    this.awaitNum = this.reviews.length;
    document.getElementById('awaitNum').innerHTML = this.awaitNum.toString();

    this.ReviewService.getInProgress().subscribe(res => {this.reviews = res;}); 
    this.inProgNum = this.reviews.length;
    document.getElementById('inProgNum').innerHTML = this.inProgNum.toString();

    this.ReviewService.getCompleted().subscribe(res => {this.reviews = res;});
    this.compNum = this.reviews.length;
    document.getElementById('compNum').innerHTML = this.compNum.toString(); 
  }

}