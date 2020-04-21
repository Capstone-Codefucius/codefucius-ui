import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-code-request',
  templateUrl: './code-request.component.html',
  styleUrls: ['./code-request.component.scss']
})
export class RequestComponent implements OnInit {

  reviewername : string;
  reviewDate: Date;
  question1: number;


  ngOnInit(): void {
  }

  public submit(){
    debugger;
  }

}
