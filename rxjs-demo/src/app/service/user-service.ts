import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  getFilteredUsers():Observable<User[]>
  {
     return this.http.get<User[]>(this.apiUrl)
       .pipe(
         tap(users => console.log('All users from API:',users)),
         map(users =>
           users
             .filter(user => user.email.endsWith('.org'))
             .map(user => ({id: user.id, name:user.name , email: user.email}))
         ),
         tap(filtered => console.log('Filtered users:',filtered))
       );
  }
}
