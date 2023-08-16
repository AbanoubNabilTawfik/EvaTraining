import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {
  employees=[
    {"id":1 ,"name":"Ahmed Mohamed"},
    {"id":2 ,"name":"Sara Mostafa"},
    {"id":3 ,"name":"Abanoub Nabil"},
    {"id":4 ,"name":"Mohamed Gamal"}
  ]
}
