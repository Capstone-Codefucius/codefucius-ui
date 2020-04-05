//tutorial https://atom-morgan.github.io/how-to-mock-an-api-in-angular/
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ReviewService {
   review: Array<any> = [
    { Author: 'Stanley Hudson', RequestTo: 'Michael Scott', ProjectName: 'Sales app', Description: 'Added database to sales app', Status: 'Awaiting', Created: new Date('04-03-2020').toLocaleDateString(), Deadline: new Date('04-10-2020').toLocaleDateString() },
    { Author: 'Kevin Malone', RequestTo: 'Jim Halpert', ProjectName: 'Accounting software', Description: 'Updated expense feature', Status: 'Completed', Created: new Date('01-02-2020').toLocaleDateString(), Deadline: new Date('01-03-2020').toLocaleDateString() },
    { Author: 'Meredith Palmer', RequestTo: 'Andy Dwyer', ProjectName: 'Company website', Description: 'Coded front-end in React', Status: 'In Progress', Created: new Date('02-04-2020').toLocaleDateString(), Deadline: new Date('02-06-2020').toLocaleDateString() },
    { Author: 'Creed Bratton', RequestTo: 'Michael Scott' , ProjectName: 'Company website', Description: 'Need help with bug', Status: 'In Progress', Created: new Date('03-26-2020').toLocaleDateString(), Deadline: new Date('04-02-2020').toLocaleDateString() },
    { Author: 'Phyllis Vance', RequestTo: 'Michael Scott', ProjectName: 'Sales app', Description: 'Created API for sales app', Status: 'Completed', Created: new Date('02-16-2020').toLocaleDateString(), Deadline: new Date('02-28-2020').toLocaleDateString() },
    { Author: 'Pam Halpert', RequestTo: 'Andy Dwyer', ProjectName: 'Company website', Description: 'Fixing front-end UI', Status: 'Completed', Created: new Date('04-03-2020').toLocaleDateString(), Deadline: new Date('05-01-2020').toLocaleDateString() },
    { Author: 'Kelly Kapoor', RequestTo: 'Jim Halpert', ProjectName: 'Customer Service Portal', Description: 'Created portal in Python', Status: 'Awaiting', Created: new Date('04-15-2020').toLocaleDateString(), Deadline: new Date('04-21-2020').toLocaleDateString() }
  ];
  
  constructor() { }

//functions for cards
  get() {
    return of(this.review);
  }

  getAwaiting() {
    return of(this.review.filter(r=>r.Status =='Awaiting'));
  }
  
  getInProgress() {
    return of(this.review.filter(r=>r.Status =='In Progress'));
  }

  getCompleted() {
    return of(this.review.filter(r=>r.Status =='Completed'));
  }
}
