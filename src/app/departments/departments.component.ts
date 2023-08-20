import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  selectedId:any;
  constructor(private router :Router,private activatedRoute:ActivatedRoute)
  {

  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId=params.get("id");
    })
  }

 departments=[
  {"id":1 ,"name":"JavaScript"},
  {"id":2 ,"name":"TypeScript"},
  {"id":3 ,"name":"Angular"},
  {"id":4 ,"name":"ES6"},
  {"id":5 ,"name":"React JS"}
 ]

 onSelect(department:any)
 {
  //navigate to departnment details component and pass the id
  this.router.navigate(["/department",department.id]);
 }
}
