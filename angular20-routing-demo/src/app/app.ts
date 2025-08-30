import {Component, OnInit, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Form} from './form/form';
import {filter, from, fromEvent, interval, map, take, tap} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit
{
  protected readonly title = signal('angular20-routing-demo');

  ngOnInit(): void
  {

    // example 1
    const source = from([1,2,3]);
    source.subscribe( data => console.log(data))

    // example 2
    fromEvent<MouseEvent>(document,'click')
      .pipe(
        tap(data =>console.log('Before filtering',data)),
        filter(data => data.clientX > 300 && data.clientY > 300),
        map(data =>`X: ${data.clientX}, Y: ${data.clientY}` )
      )
      .subscribe((data) =>{
        console.log('final',data);
      });

    // example 3 : interval observables

    interval(1000)
      .pipe(take(4))
      .subscribe(data => console.log('Next',data));
  }
}
