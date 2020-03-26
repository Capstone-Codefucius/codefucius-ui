import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
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