import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreService } from '../services/store.service';
import { UserApiService } from '../services/user-api.service';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  constructor(private userApi: UserApiService, private store: StoreService) {}

  get user$() {
    return this.store.select(state => state.userDetail.user);
  }

  async fetchUser(userId: string) {
    this.store.update(state => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user: null
      }
    }));

    const user = await this.userApi.getUserById(userId);

    this.store.update(state => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user
      }
    }));
  }
}
