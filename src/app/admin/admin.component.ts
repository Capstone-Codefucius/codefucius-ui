import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface AdminTable {
  name: string;
  role: string;
}

const ELEMENT_DATA: AdminTable[] = [
  {name: 'Emily McDonald', role: 'Reviewer'},
  {name: 'Bill Smile', role: 'Reviewer'},
  {name: 'Will Desk', role: 'Reviewee'},
  {name: 'Smith Will', role: 'Reviewer'}
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['name', 'role'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
  }

}
