import {Component, QueryList, ViewChildren} from '@angular/core';
import {WidgetComponent} from '../widget-component/widget-component';

@Component({
  selector: 'app-dashboard-component',
  imports: [WidgetComponent],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css'
})
export class DashboardComponent {

  @ViewChildren(WidgetComponent) widgets!: QueryList<any>;

  refreshAll()
  {
    this.widgets.forEach(widget => widget.refresh());
  }
}
