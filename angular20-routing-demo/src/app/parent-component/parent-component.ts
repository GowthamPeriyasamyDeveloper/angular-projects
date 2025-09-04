import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ChildComponent} from '../child-component/child-component';

@Component({
  selector: 'app-parent-component',
  imports: [
    ChildComponent
  ],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css'
})
export class ParentComponent implements AfterViewInit{

  @ViewChild(ChildComponent) childComponent! : ChildComponent;

  ngAfterViewInit()
  {
    console.log(this.childComponent.sayHello());
  }

  callChild() {
      alert(this.childComponent.sayHello());
  }
}
