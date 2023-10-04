import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCodeComponent } from './demo-code.component';

describe('DemoCodeComponent', () => {
  let component: DemoCodeComponent;
  let fixture: ComponentFixture<DemoCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoCodeComponent]
    });
    fixture = TestBed.createComponent(DemoCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
