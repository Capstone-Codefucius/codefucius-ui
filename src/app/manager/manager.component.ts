import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UserService } from '../services/user/user.service';
import { User } from '../services/user/user';
// import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';


export interface ManagerTable {
  name: string;
  role: string;
  reviewHours: number;
  value: number;
  completedReviews: number;
}

const ELEMENT_DATA: ManagerTable[] = [
  { name: 'Greg Mann', role: 'Reviewee', reviewHours: 3.5,value: 3.5, completedReviews: 6},
  { name: 'Danny Osborne', role: 'Manager', reviewHours: 2, value: 2, completedReviews: 6},
  { name: 'Mary Mercer', role: 'Reviewee', reviewHours: 5.5, value: 5.5, completedReviews: 6},
  { name: 'Terrence Schubert', role: 'Reviewer', reviewHours: 0, value: 0, completedReviews: 6},
  { name: 'Marie Leon', role: 'Admin', reviewHours: 0, value: 0, completedReviews: 6}

];

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  //displayedColumns: string[] = ['name', 'role', 'reviewHours', 'completedReviews'];
  displayedColumns: string[] = ['name', 'role', 'reviewHours', 'value', 'completed'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
  ELEMENT_DATA: any[];

  //maybe filter list here, then the box just calls it

  users: Array<User>;
  // dataSource: UserService;



  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Employee';
  yAxisLabel = 'Code Review Hours Completed';
  colorScheme = {
    domain: ['#80CBC4']
  };

  reviewDateTo: Date;
  reviewDateFrom: Date;

  constructor(private UserService: UserService) {
    Object.assign(this, { ELEMENT_DATA })
    // Object.assign(this, { User })
  }
 
  //call to API to get names
  ngOnInit() {
    this.UserService.getAll().subscribe(res => {
      this.users = res;
    })

  }
}


