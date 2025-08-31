import {Component, inject} from '@angular/core';
import {UserPostsService} from '../../service/user-posts-service';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-user-posts',
  imports: [
    NgForOf,
    AsyncPipe,
    JsonPipe,
    NgIf
  ],
  templateUrl: './user-posts.html',
  styleUrl: './user-posts.css'
})
export class UserPosts
{
  private service = inject(UserPostsService);

  parallelPosts$ = this.service.getUserPostsParallel([1,2,3]);

  sequentialPosts$ = this.service.getUserPostsSequential([1,2,3]);

  userData$ = this.service.getUserAndPosts(1);
}
