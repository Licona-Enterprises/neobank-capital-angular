import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from '../my-modal/my-modal.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(MyModalComponent);

    modalRef.result.then((result) => {
      console.log(`Modal result: ${result}`);
    }).catch((error) => {
      console.log(`Modal dismissed with result: ${error}`);
    });
  }
}

