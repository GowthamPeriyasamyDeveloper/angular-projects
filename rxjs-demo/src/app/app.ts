import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserDetails} from './user-details/user-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rxjs-demo');
}
