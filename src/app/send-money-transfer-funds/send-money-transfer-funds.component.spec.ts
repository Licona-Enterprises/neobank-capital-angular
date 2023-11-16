import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMoneyTransferFundsComponent } from './send-money-transfer-funds.component';

describe('SendMoneyTransferFundsComponent', () => {
  let component: SendMoneyTransferFundsComponent;
  let fixture: ComponentFixture<SendMoneyTransferFundsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendMoneyTransferFundsComponent]
    });
    fixture = TestBed.createComponent(SendMoneyTransferFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
