import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users$ = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {}

  get users$() {
    return this._users$.asObservable();
  }

  fetchUsers(): void {
    this.http
      .get<{ data: User[] }>('https://reqres.in/api/users')
      .pipe(map((res) => res.data))
      .subscribe((users) => {
        this._users$.next(users);
      });
  }
}
