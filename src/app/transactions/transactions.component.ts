import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {MatTabsModule} from '@angular/material/tabs';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// Import Angular Material modules
import { NgModule } from '@angular/core';
import {ThemePalette} from '@angular/material/core';



const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TransactionsComponent {

  @NgModule({
    imports: [
         FormsModule
    ]})

  isCardVisible = false;
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

  isTrade: boolean = false
  checkAllTrades: boolean = false
  trade = [
    { label: 'Ops / Payroll', selected: false, disabled: false },
    { label: 'Checking ••4311', selected: false, disabled: false },
    { label: 'AP', selected: false, disabled: false },
    { label: 'AR', selected: false, disabled: false },
    { label: 'Checking ••0297', selected: false, disabled: false },
    { label: 'Treasury', selected: false, disabled: false },
    { label: 'Credit', selected: false, disabled: false },
  ];

  changeTradesByCategory(event: Event) {
    if ((event.target as HTMLInputElement).name === 'trades') {
      this.isTrade = true;
    }

    if (this.isTrade && this.checkAllTrades) {
      (event.target as HTMLInputElement).checked = true;
    }
  }

  allTrades(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.trade.forEach(item => (item.selected = checked));
  }


  task: Task = {
    name: 'ACH',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Mercury Payment', completed: false, color: 'primary'},
      {name: 'Mercury Transfer', completed: false, color: 'accent'},
      {name: 'ACH In', completed: false, color: 'warn'},
      {name: 'ACH Pull', completed: false, color: 'warn'}
    ]
  };

  allComplete: boolean = false;


  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

}
