import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReceiveFundsComponent } from './add-receive-funds.component';

describe('AddReceiveFundsComponent', () => {
  let component: AddReceiveFundsComponent;
  let fixture: ComponentFixture<AddReceiveFundsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddReceiveFundsComponent]
    });
    fixture = TestBed.createComponent(AddReceiveFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
