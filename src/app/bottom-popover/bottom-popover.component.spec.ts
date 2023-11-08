import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPopoverComponent } from './bottom-popover.component';

describe('BottomPopoverComponent', () => {
  let component: BottomPopoverComponent;
  let fixture: ComponentFixture<BottomPopoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomPopoverComponent]
    });
    fixture = TestBed.createComponent(BottomPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
