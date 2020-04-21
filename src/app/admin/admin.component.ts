import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../services/user/user';

export interface AdminTable {
  name: string;
  role: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['name', 'role'];
  users: Array<User>;
  dataSource: any;
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.UserService.getAll().subscribe(res => {
      this.users = res;
    })
  }

}


