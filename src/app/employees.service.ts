import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IEmployee } from './IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  //employees=[];
  _url='/assets/Data/employee.json';
  constructor(private http:HttpClient) { }

  getAllEmployees() :Observable<IEmployee[]>
  {
    //return this.employees;
    return this.http.get<IEmployee[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message || "Internal server error")
    }));
  }

  postEmployee(employee:any)
  {
    return this.http.post(this._url,employee).pipe(catchError((err)=>{
      return throwError(()=>err.message || "Internal server error")
    }));
  }
}
