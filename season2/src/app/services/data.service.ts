import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private valueSubject = new BehaviorSubject<any>('initial');

  get valueChanges$() {
    return this.valueSubject.asObservable();
  }

  setValue(value: any) {
    this.valueSubject.next(value);
  }
}
