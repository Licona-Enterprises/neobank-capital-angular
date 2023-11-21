import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiredrwdownsRecipientDetailsComponent } from './wiredrwdowns-recipient-details.component';

describe('WiredrwdownsRecipientDetailsComponent', () => {
  let component: WiredrwdownsRecipientDetailsComponent;
  let fixture: ComponentFixture<WiredrwdownsRecipientDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WiredrwdownsRecipientDetailsComponent]
    });
    fixture = TestBed.createComponent(WiredrwdownsRecipientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
