import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binindg',
  templateUrl: './class-binindg.component.html',
  styleUrls: ['./class-binindg.component.scss']
})
export class ClassBinindgComponent {
 textColor:string="text-danger";
 hasError:boolean=true;
 hasSpecial:boolean=true;

 messageClasses={
  "text-success":!this.hasError,
  "text-danger":this.hasError,
  "text-special":this.hasSpecial
 }
}
