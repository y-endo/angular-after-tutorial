import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { UserListFilter } from '../../state';

@Component({
  selector: 'app-user-list-filter',
  templateUrl: './user-list-filter.component.html',
  styleUrls: ['./user-list-filter.component.scss']
})
export class UserListFilterComponent implements OnDestroy, OnInit {
  @Input() set value(value: UserListFilter) {
    this.setFormValue(value);
  }
  @Output() valueChange = new EventEmitter<UserListFilter>();
  form: FormGroup;
  private onDestroy = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nameFilter: ['']
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.onDestroy)).subscribe(value => {
      this.valueChange.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }

  private setFormValue(value: UserListFilter) {
    this.form.setValue(value, { emitEvent: false });
  }
}
