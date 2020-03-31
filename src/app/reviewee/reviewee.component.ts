import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, style, animate, transition } from '@angular/animations';


export interface AwaitingTable {
  id: string;
  author: string;
  title: string;
  description: string;
  status: string;
  createdOn: string;
  deadline: string;

  reviewername : string;
  reviewDate: Date;
  question1: number;
}

// const ELEMENT_DATA: AwaitingTable[] = [
//   {projectName: 'Emily McDonald', dueDate: 'Reviewee', requestTo: "name", author: "name"},
//   {projectName: 'Bill Smile', dueDate: 'Reviewee', requestTo: "name", author: "name"},
//   {projectName: 'Will Desk', dueDate: 'Reviewee', requestTo: "name", author: "name"},
//   {projectName: 'Smith Will', dueDate: 'Reviewee', requestTo: "name", author: "name"}
// ];

const jsonFromAPI = [
  {
      "id": "7e6e1b81-7be9-49be-a600-58462c9e8bd9",
      "author": "James Jooms",
      "title": "My code review",
      "description": "This is my cool review",
      "status": "In-progress",
      "created": "2020-03-17T00:00:00",
      "deadline": "2020-03-20T00:00:00"
  },
  {
      "id": "de1b91ce-229c-4c0d-8f92-fa3b657dd8b0",
      "author": "The boss man",
      "title": "My another review",
      "description": "Hopefully this will be okay",
      "status": "Awaiting",
      "created": "2020-03-17T00:00:00",
      "deadline": "2020-03-20T00:00:00"
  },
  {
      "id": "3bd6eeaa-cb77-482c-b7f9-306d851a9517",
      "author": "Cool guy",
      "title": "Fixed bug",
      "description": "Worked on this for a while",
      "status": "Awaiting",
      "created": "2020-03-17T00:00:00",
      "deadline": "2020-03-20T00:00:00"
  },
  {
      "id": "80c31719-7b2f-454a-a65a-e2d01e5903f2",
      "author": "Jip Joop",
      "title": "More fixes",
      "description": "Fun times",
      "status": "Awaiting",
      "created": "2020-03-17T00:00:00",
      "deadline": "2020-03-20T00:00:00"
  }
];

@Component({
  selector: 'app-reviewee',
  templateUrl: './reviewee.component.html',
  styleUrls: ['./reviewee.component.css'],
  
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

  objectString = JSON.stringify(jsonFromAPI);
  ELEMENT_DATA: string[] = JSON.parse(this.objectString);

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

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
  review() {
    this.isOpenAwait = false;
    this.isOpenInProg = false;
    this.isOpenComp = false;
    this.reviewHours = !this.reviewHours;
  }

  constructor() { }

  ngOnInit() {
  }

}