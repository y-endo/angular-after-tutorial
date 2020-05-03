import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-explicit-subscribe',
  templateUrl: './explicit-subscribe.component.html',
  styleUrls: ['./explicit-subscribe.component.scss']
})
export class ExplicitSubscribeComponent implements OnInit, OnDestroy {
  public value: any;
  private onDestroy$ = new Subject();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.valueChanges$
      .pipe(
        takeUntil(this.onDestroy$),
        map(value => `ValueName is ${value.name}`)
      )
      .subscribe(value => {
        this.value = value;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
