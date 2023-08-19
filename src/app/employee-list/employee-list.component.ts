import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees:any=[]
  errorMessage:any;
constructor(private employeeService:EmployeesService) {

  
}
  ngOnInit(): void {
   // this.employees=this.employeeService.getAllEmployees();
  //  this.employeeService.getAllEmployees().subscribe(
  //   data=>{
  //     this.employees=data;
  //   }
  //  )
  this.employeeService.getAllEmployees().subscribe({
    next:data=>this.employees=data,
    error:error=>this.errorMessage=error
  })
  }

  
}
