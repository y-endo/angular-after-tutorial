import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { StoreService } from './store.service';
import { UserApiService } from './user-api.service';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private userApi: UserApiService, private store: StoreService) {}

  get users$() {
    return (
      this.store
        // state.userListに変更があったときだけ後続のpipeが実行される
        .select(state => state.userList)
        .pipe(
          map(({ items, filter }) =>
            items.filter(user => (user.first_name + user.last_name).includes(filter.nameFilter))
          )
        )
    );
  }

  get filter$() {
    return this.store.select(state => state.userList.filter);
  }

  async fetchUsers() {
    const users = await this.userApi.getAllUsers();

    this.store.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        items: users
      }
    }));
  }

  setNameFilter(nameFilter: string) {
    this.store.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        filter: {
          nameFilter
        }
      }
    }));
  }
}
