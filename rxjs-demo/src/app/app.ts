import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserDetails} from './features/user-details/user-details';
import {UserPosts} from './features/user-posts/user-posts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserDetails, UserPosts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rxjs-demo');
}
