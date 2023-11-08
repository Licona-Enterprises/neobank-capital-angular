import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-bottom-popover',
  templateUrl: './bottom-popover.component.html',
  styleUrls: ['./bottom-popover.component.css'],
})
export class BottomPopoverComponent implements OnInit {
  @ViewChild('popoverTrigger') popoverTrigger: ElementRef | undefined;

  constructor() {}

  ngOnInit() {
    if (this.popoverTrigger) {
      // Manually initialize the Bootstrap Popover
      new bootstrap.Popover(this.popoverTrigger.nativeElement, {
        placement: 'bottom',
        content: 'This is the popover content.',
      });
    }
  }
}
