import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { UserDetailService } from '../../services/user-detail.service';
import { User } from '../../user';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss']
})
export class UserDetailPageComponent implements OnInit, OnDestroy {
  user$ = this.userDetailService.user$;

  private onDestroy$ = new EventEmitter();

  constructor(private route: ActivatedRoute, private userDetailService: UserDetailService) {
    this.route.params
      .pipe(
        // コンポーネントの破棄と同時に停止する
        takeUntil(this.onDestroy$),
        // paramsからuserIdを取り出す
        map(params => params['userId']),
        // userIdが変わったときだけ値を流す
        distinctUntilChanged()
      )
      .subscribe(userId => {});
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        takeUntil(this.onDestroy$),
        map(params => params['userId']),
        distinctUntilChanged()
      )
      .subscribe(userId => this.userDetailService.fetchUser(userId));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
