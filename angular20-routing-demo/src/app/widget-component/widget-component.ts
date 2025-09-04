import {Component, inject, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-widget-component',
  imports: [
    NgForOf
  ],
  templateUrl: './widget-component.html',
  styleUrl: './widget-component.css'
})
export class WidgetComponent
{
   private http = inject(HttpClient);

   @Input() type!: 'users' | 'posts' | 'todos';

   @Input() title!:string;

   data :string[] = [];

   ngOnInit()
   {
     this.refresh();
   }

   refresh()
   {
     let url = `https://jsonplaceholder.typicode.com/${this.type}?_limit=5`;

      this.http.get<any[]>(url).subscribe(res =>
       {
        if(this.type == 'users')
        {
          this.data = res.map(item => item.name);
        }
        console.log(`${this.title} refreshed`);
       }
      );
   }
}
