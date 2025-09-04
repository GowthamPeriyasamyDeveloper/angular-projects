import { Component } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css'
})
export class ChildComponent {

  sayHello()
  {
    return 'Hello from child component';
  }
}
