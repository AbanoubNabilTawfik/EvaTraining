import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
 message:string="";

  sayHello(event:any)
  {
    console.log("Hello from typescript")
    this.message="Welcome to angular course";
    console.log(event)
  }

  printText(text:any)
  {
    console.log(text);
  }
}
