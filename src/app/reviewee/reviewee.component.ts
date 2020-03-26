import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BlockScrollStrategy, FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { NONE_TYPE } from '@angular/compiler';

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

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}