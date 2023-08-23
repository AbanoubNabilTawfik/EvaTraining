import { Component } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent {
 userModel=new User("","","");

 onSubmit()
 {
  //call service
  console.log(this.userModel)
 }
}
