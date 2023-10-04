import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWatchedComponent } from './my-watched.component';

describe('MyWatchedComponent', () => {
  let component: MyWatchedComponent;
  let fixture: ComponentFixture<MyWatchedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyWatchedComponent]
    });
    fixture = TestBed.createComponent(MyWatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
