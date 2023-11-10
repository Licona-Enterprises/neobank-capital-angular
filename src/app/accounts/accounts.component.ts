import { Component } from '@angular/core';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }
  // showForm = false;

  // openForm() {
  //   this.showForm = true;
  // }
}
