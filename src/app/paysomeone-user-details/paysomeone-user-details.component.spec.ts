import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysomeoneUserDetailsComponent } from './paysomeone-user-details.component';

describe('PaysomeoneUserDetailsComponent', () => {
  let component: PaysomeoneUserDetailsComponent;
  let fixture: ComponentFixture<PaysomeoneUserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaysomeoneUserDetailsComponent]
    });
    fixture = TestBed.createComponent(PaysomeoneUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
