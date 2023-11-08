import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySomeoneComponent } from './pay-someone.component';

describe('PaySomeoneComponent', () => {
  let component: PaySomeoneComponent;
  let fixture: ComponentFixture<PaySomeoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaySomeoneComponent]
    });
    fixture = TestBed.createComponent(PaySomeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
