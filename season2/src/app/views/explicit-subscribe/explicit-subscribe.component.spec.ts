import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicitSubscribeComponent } from './explicit-subscribe.component';

describe('ExplicitSubscribeComponent', () => {
  let component: ExplicitSubscribeComponent;
  let fixture: ComponentFixture<ExplicitSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplicitSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplicitSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
