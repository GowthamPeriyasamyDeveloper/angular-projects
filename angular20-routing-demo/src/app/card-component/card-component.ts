import {AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, QueryList} from '@angular/core';

@Component({
  selector: 'app-card-component',
  imports: [],
  template:`
  <div class="card">
    <h3>Card Component</h3>
    <ng-content></ng-content>
  </div>
  <div class="card">
    <h3>Card with Multiple Items</h3>
    <ng-content></ng-content>
  </div>
  `,
  styles: ``
})
export class CardComponent implements AfterContentInit{

    @ContentChild('cardContent') cardContent!: ElementRef;

    @ContentChildren('item') items!: QueryList<ElementRef>

     ngAfterContentInit(): void
     {
        console.log('Projected content text:',this.cardContent.nativeElement.textContent);

        this.items.forEach((item,index)=>
        {
            console.log(`Item ${index+1}:`,item.nativeElement.textContent);
        })

     }

}
