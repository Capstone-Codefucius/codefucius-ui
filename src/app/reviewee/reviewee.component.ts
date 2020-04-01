import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BlockScrollStrategy, FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { NONE_TYPE } from '@angular/compiler';

import {MatDialog} from '@angular/material/dialog';
import { RequestComponent } from '../code-request/code-request.component';

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
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  reviewername : string;
  reviewDate: Date;
  question1: number;

  isOpenAwait = false;
  isOpenInProg = false;
  isOpenComp = false;
  reviewHours = false;

  toggleAwait() {
    this.isOpenInProg = false;
    this.isOpenComp = false;
    this.reviewHours = false;
    this.isOpenAwait = !this.isOpenAwait;
  }
  toggleInProg() {
    this.isOpenAwait = false;
    this.isOpenComp = false;
    this.reviewHours = false;
    this.isOpenInProg = !this.isOpenInProg;
  }
  toggleComp() {
    this.isOpenAwait = false;
    this.isOpenInProg = false;
    this.reviewHours = false;
    this.isOpenComp = !this.isOpenComp;
  }
  toggleReview() {
    this.isOpenAwait = false;
    this.isOpenInProg = false;
    this.isOpenComp = false;
    this.reviewHours = !this.reviewHours;
  }

  constructor(public dialog: MatDialog) {}

  requestOpen(): void {
    const dialogRef = this.dialog.open(RequestComponent,{ panelClass: 'custom-dialog-container'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
   });
  }

  ngOnInit() {
  }

}