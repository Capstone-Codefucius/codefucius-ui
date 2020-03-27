import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-code-request',
  templateUrl: './code-request.component.html',
  styleUrls: ['./code-request.component.css']
})
export class CodeRequestComponent implements OnInit {
  
  // binding
  reviewername : string;
  reviewDate: Date;
    question1: number;

  /*constructor() { 
    this.reviewername = "test2"
  }*/

  ngOnInit(): void {
  }

  public submit(){
    debugger;
  }

}
