import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  //@Input() parentData:any;
  @Input('parentData') messageFromParent:any;
  @Output() childEvent = new EventEmitter();

  sendDataToParent()
  {
    this.childEvent.emit("Hello Parent From Child");
  }

  whoAmI()
  {
    console.log("Im child");
  }
}
