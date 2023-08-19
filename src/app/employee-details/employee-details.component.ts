import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employees:any=[]
  errorMessage:any;
  constructor(private employeeService:EmployeesService){

  }
  ngOnInit(): void {

    //this.employees=this.employeeService.getAllEmployees();
    // this.employeeService.getAllEmployees().subscribe(
    //   employeeData=>{
    //     this.employees=employeeData;
    //   }
    // )
    this.employeeService.getAllEmployees().subscribe({
      next:employeeData=>this.employees=employeeData,
      error:error=>this.errorMessage=error
    })

  }
 
}
