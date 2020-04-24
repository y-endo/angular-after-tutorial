import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserListFilter } from './state';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users$ = this.userService.users$;
  userListFilter$ = this.userService.filter$;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.fetchUsers();
  }

  setUserListFilter(value: UserListFilter) {
    this.userService.setNameFilter(value.nameFilter);
  }
}
