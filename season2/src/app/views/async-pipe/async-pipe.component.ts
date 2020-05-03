import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent implements OnInit {
  public value$: Observable<any>;

  constructor(private dataService: DataService) {
    // this.value$ = this.dataService.valueChanges$.pipe(map(value => `Value: ${value}`));
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.value$ = this.dataService.valueChanges$;
      this.dataService.setValue({ name: 'AAA' });
    }, 1000);
  }
}
