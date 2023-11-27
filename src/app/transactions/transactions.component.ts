import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {MatTabsModule} from '@angular/material/tabs';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// Import Angular Material modules

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TransactionsComponent {
  isCardVisible = false;

  constructor() {}

  toggleCardVisibility() {
    this.isCardVisible = !this.isCardVisible;
  }
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
}
