import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Import Angular Material modules

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent {
  isCardVisible = false;

  constructor() {}

  toggleCardVisibility() {
    this.isCardVisible = !this.isCardVisible;
  }
}
