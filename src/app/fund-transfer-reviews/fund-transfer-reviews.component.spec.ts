import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTransferReviewsComponent } from './fund-transfer-reviews.component';

describe('FundTransferReviewsComponent', () => {
  let component: FundTransferReviewsComponent;
  let fixture: ComponentFixture<FundTransferReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundTransferReviewsComponent]
    });
    fixture = TestBed.createComponent(FundTransferReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
