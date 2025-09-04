import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view-child-example-component',
  imports: [],
  templateUrl: './view-child-example-component.html',
  styleUrl: './view-child-example-component.css'
})
export class ViewChildExampleComponent implements AfterViewInit{

  @ViewChild('userInput') userInput!:ElementRef;

  ngAfterViewInit(): void {

    this.userInput.nativeElement.focus();

  }

  captureUserName()
  {
     debugger;
     console.log('the user input is', this.userInput.nativeElement.value)
  }
}
