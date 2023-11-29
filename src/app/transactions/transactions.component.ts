import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

export interface TaskSet  {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: TaskSet[];
  allComplete?: boolean;
}

// export interface Task {
//   name: string;
//   completed: boolean;
//   color: ThemePalette;
// }

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

  // Method

  taskSets: TaskSet[] = [
    {
      name: 'ACH',
      completed: false,
      color: 'primary',
      subtasks: [
        {name: 'Mercury Payment', completed: false, color: 'primary'},
        {name: 'Mercury Transfer', completed: false, color: 'accent'},
        {name: 'ACH In', completed: false, color: 'warn'},
        {name: 'ACH Pull', completed: false, color: 'warn'}
      ]
    },
    {
      name: 'Wire',
      completed: false,
      color: 'primary',
      subtasks: [
        {name: 'Wire In', completed: false, color: 'primary'},
        {name: 'Wire Out(International)', completed: false, color: 'accent'},
        {name: 'Wire Out(Domestic)', completed: false, color: 'warn'},
      ]
    },
    {
      name: 'Card',
      completed: false,
      color: 'primary',
      subtasks: [
        {name: 'Debit Card', completed: false, color: 'primary'},
        {name: 'Credit Card', completed: false, color: 'accent'},
        {name: 'Credit Account Payment', completed: false, color: 'warn'},
        {name: 'Credit Cashback Deposit', completed: false, color: 'warn'},
      ]
    },
    {
      name: 'Check',
      completed: false,
      color: 'primary',
      subtasks: [
        {name: 'Check Payment', completed: false, color: 'primary'},
        {name: 'Check Deposit', completed: false, color: 'accent'},
      ]
    },
    {
      name: 'Treasury Transfer',
      completed: false,
      color: 'primary',
    },
    {
      name: 'Venture Debt Transfer',
      completed: false,
      color: 'primary',
    },
    {
      name: 'Payment Request',
      completed: false,
      color: 'primary',
    },
     {
      name: 'Capital Growth',
      completed: false,
      color: 'primary',
    },
  ]

    allComplete: boolean = false;
    updateAllComplete(taskSet:TaskSet) {
      taskSet.allComplete = taskSet.subtasks != null && taskSet.subtasks.every(t => t.completed);
    }
    someComplete(taskSet: TaskSet): boolean {
      if (taskSet.subtasks == null) {
        return false;
      }
      return taskSet.subtasks.filter(t => t.completed).length > 0 && !taskSet.allComplete;
    }
    setAll(taskSet: TaskSet, completed: boolean) {
      taskSet.allComplete = completed;
      if (taskSet.subtasks == null) {
        return;
      }
      taskSet.subtasks.forEach(t => t.completed = completed);
    }
    public transaction: Array<any> = [
      { date: "Nov1", to: "Deposit from Client A", amount:"$7,500.00", Account:"Checking",Payment:"Wire Transfer"},
      { date: "Nov4", to: "Deposit from Client B", amount:"$7,500.00", Account:"Checking",Payment:"Wire Transfer"},
      { date: "Nov6", to: "Deposit from Client A", amount:"$8,500.00", Account:"Checking",Payment:"Wire Transfer"},
      { date: "Nov8", to: "Payment from Client B", amount:"$5,500.00", Account:"Savings",Payment:"Wire Transfer"},
      { date: "Nov8", to: "Payment from Client B", amount:"$5,500.00", Account:"Savings",Payment:"Wire Transfer"},
      { date: "Nov8", to: "Transfer from Account X", amount:"$5,500.00", Account:"Checking",Payment:"Wire Transfer"},
    ];

}
