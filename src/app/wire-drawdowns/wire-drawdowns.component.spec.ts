import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WireDrawdownsComponent } from './wire-drawdowns.component';

describe('WireDrawdownsComponent', () => {
  let component: WireDrawdownsComponent;
  let fixture: ComponentFixture<WireDrawdownsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WireDrawdownsComponent]
    });
    fixture = TestBed.createComponent(WireDrawdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
