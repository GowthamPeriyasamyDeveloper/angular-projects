import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {concatMap, forkJoin, from, map, mergeMap, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPostsService
{
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com';


  getUserPostsParallel(userIds:number[]): Observable<any>
  {
      return from(userIds)
        .pipe(
          mergeMap(id => this.http.get(`${this.apiUrl}/users/${id}/posts`)),
          map(posts => posts)
        );
  }

  getUserPostsSequential(userIds:number[]):Observable<any>
  {
    return from(userIds)
      .pipe(
        concatMap(id => this.http.get(`${this.apiUrl}/users/${id}/posts`)),
        map(posts => posts)
      )
  }

  getUserAndPosts(userId:number) : Observable<any>
  {
    return forkJoin(
      {
        user: this.http.get(`${this.apiUrl}/users/${userId}`),
        posts: this.http.get(`${this.apiUrl}/users/${userId}/posts`),
        todos: this.http.get(`${this.apiUrl}/users/${userId}/todos`),
      });
  }
}
