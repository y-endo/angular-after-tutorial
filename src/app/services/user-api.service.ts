import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../user';

const apiHost = 'https://reqres.in/api';

interface ApiResponse<T> {
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  constructor(private http: HttpClient) {}

  async getAllUsers() {
    return await this.http
      .get<ApiResponse<User[]>>(`${apiHost}/users`)
      .pipe(map(res => res.data))
      .toPromise();
  }

  async getUserById(id: string) {
    return await this.http
      .get<ApiResponse<User>>(`${apiHost}/users/${id}`)
      .pipe(map(res => res.data))
      .toPromise();
  }
}
