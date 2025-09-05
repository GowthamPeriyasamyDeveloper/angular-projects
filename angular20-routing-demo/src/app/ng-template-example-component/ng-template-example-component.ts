import { Component } from '@angular/core';
import {NgIf, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-ng-template-example-component',
  imports: [
    NgIf,
    NgTemplateOutlet
  ],
  templateUrl: './ng-template-example-component.html',
  styleUrl: './ng-template-example-component.css'
})
export class NgTemplateExampleComponent {

  isLoggedIn:boolean=true;
  show:boolean =true;
}
