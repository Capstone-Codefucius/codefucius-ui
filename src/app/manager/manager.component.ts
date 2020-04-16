import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface ManagerTable {
  name: string;
  role: string;
  reviewHours: number;
  completedReviews: number;
}

const ELEMENT_DATA: ManagerTable[] = [
  {name: 'Emily McDonald', role: 'Reviewer', reviewHours: 10, completedReviews: 6},
  {name: 'Bill Smile', role: 'Reviewer', reviewHours: 15, completedReviews: 10},
  {name: 'Will Desk', role: 'Reviewer', reviewHours: 6, completedReviews: 8},
  {name: 'Smith Will', role: 'Reviewer', reviewHours: 1, completedReviews: 15}
];

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  displayedColumns: string[] = ['name', 'role', 'reviewHours', 'completedReviews'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reviewDateTo: Date;
  reviewDateFrom: Date;

  constructor() { }

  ngOnInit() {
  }
}
