
import { Component, ViewEncapsulation,ViewChild } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';
// import * as dayjs from 'dayjs';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ExportService } from '../export.service';
import {ThemePalette} from '@angular/material/core';
export interface TaskSet  {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: TaskSet[];
  allComplete?: boolean;
}

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})

export class TransactionsComponent {
  selectedDates: { startDate: Dayjs, endDate: Dayjs };
  alwaysShowCalendars: boolean;
  showRangeLabelOnInput: boolean;
  keepCalendarOpeningWithRange: boolean;
  monthstart = ''
  monthend = ''
  specificAmount= ''
  newdata:any[] = []
  filterAccordingtoSpecificAmount = (event:Event):void =>{

    this.newdata = this.dataToExport.filter((item:any)=>{
      console.log(item.amount.slice(1))
      if((item.amount.slice(1)) === (event.target as HTMLInputElement).value){
        return true
      }
      else if((event.target as HTMLInputElement).value==='')
        return true
      else
        return false
    }
    )
    console.log(this.newdata)
    this.dataSource = new MatTableDataSource<any>(this.newdata);
  }

  filterAccordingtoAtLeast = (event:Event):void => {
    this.newdata = this.dataToExport.filter((item:any)=>{
      console.log(+item.amount.slice(1) >= +(event.target as HTMLInputElement).value)
      console.log(typeof +item.amount.slice(1))

      if(+item.amount.slice(1) >= +(event.target as HTMLInputElement).value){
        return true
      }
      else if((event.target as HTMLInputElement).value==='')
        return true
      else
        return false
    }
    )
    this.dataSource = new MatTableDataSource<any>(this.newdata);
  }

  filterAccordingtoNoMoreThat = (event:Event):void => {
    this.newdata = this.dataToExport.filter((item:any)=>{
      console.log(+item.amount.slice(1) >= +(event.target as HTMLInputElement).value)
      console.log(typeof +item.amount.slice(1))

      if(+item.amount.slice(1) <= +(event.target as HTMLInputElement).value){
        return true
      }
      else if((event.target as HTMLInputElement).value==='')
        return true
      else
        return false
    }
    )
    this.dataSource = new MatTableDataSource<any>(this.newdata);
  }

  filterAccordingToDates = (data:any) =>{
    console.log(data)
    console.log(data.end['$d'].toLocaleString('default', { month: 'short' }))
    this.monthend = data.end['$d'].toLocaleString('default', { month: 'short' })
    this.monthstart = data.start['$d'].toLocaleString('default', { month: 'short' })
    console.log(this.dataToExport)
    this.newdata = this.dataToExport.filter((item)=>{
      if(item.date.includes(this.monthstart)||item.date.includes(this.monthend)){
        return true
      }else{
        return false;
      }
    })
    console.log(this.newdata)
   this.dataSource = new MatTableDataSource<any>(this.newdata);
  }

  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }
  invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];

  isInvalidDate = (m: moment.Moment) =>  {
    return this.invalidDates.some(d => d.isSame(m, 'day') )
  }

  constructor(private exportService: ExportService) {
    this.selectedDates = { startDate: dayjs(), endDate: dayjs() };
    this.alwaysShowCalendars = true;
    this.showRangeLabelOnInput = true;
    this.keepCalendarOpeningWithRange = true;
  }
  isCardVisible = false;
  toggleCardVisibility() {
    this.isCardVisible = !this.isCardVisible;
  }
/*****EXPORT DATA FROM TRANSACTION AND DISPLAY DATA */
dataToExport =
[
  { date: 'Dec 15', To: { name: 'John Doe', imageUrl: '../../assets/images/images.jpg' }, amount: '$229.37', Account: 'AR', 'Payment Method': 'Jane B. ••4928',Attachment:'+',showDate: false },
  { date: 'Dec 25', To: { name: 'James Johnson', imageUrl: '../../assets/images/images.jpg' }, amount: '$988.82', Account: 'Ops / Payroll', 'Payment Method': 'Jane B. ••4928' ,Attachment:'+' ,showDate: false},
  { date: 'Dec 11', To:{ name: 'Emily Davis', imageUrl: '../../assets/images/images.jpg' }, amount: '$900.45', Account: 'Credit account', 'Payment Method': 'Landon S. ••4929',Attachment:'+' ,showDate: false },
  { date: 'Nov 11', To:{ name: 'Robert Brown', imageUrl: '../../assets/images/images.jpg' }, amount: '$800', Account: 'AP', 'Payment Method': 'Landon S. ••4929',Attachment:'+'  ,showDate: false},
  { date: 'Nov 11', To:{ name: 'Olivia White', imageUrl: '../../assets/images/images.jpg' }, amount:'$700', Account: 'Treasury', 'Payment Method': 'Landon S. ••4929',Attachment:'+'  ,showDate: false},
  { date: 'Nov 11', To:{ name: 'Michael Taylor', imageUrl: '../../assets/images/images.jpg' }, amount:'$200', Account: 'Credit account', 'Payment Method': 'Landon S. ••4929',Attachment:'+'  ,showDate: false},
  { date: 'Nov 11', To:{ name: 'Sophia Miller', imageUrl: '../../assets/images/images.jpg' }, amount:'$3000', Account: 'Treasury', 'Payment Method': 'Landon S. ••4929',Attachment:'+'  ,showDate: false},
  { date: 'Oct 11', To:{ name: 'William Anderson', imageUrl: '../../assets/images/images.jpg' }, amount:'$2000', Account: 'Ops / Payroll', 'Payment Method': 'Landon S. ••4929',Attachment:'+'  ,showDate: false},
  { date: 'Oct 11', To:{ name: 'Ava Robinson', imageUrl: '../../assets/images/images.jpg' }, amount:'$900.50', Account: 'AR', 'Payment Method': 'Landon S. ••4929',Attachment:'+'  ,showDate: false},
  { date: 'Sep 11', To:{ name: 'Benjamin Wilson', imageUrl: '../../assets/images/images.jpg' }, amount:'$600.45', Account: 'Ops / Payroll', 'Payment Method': 'Landon S. ••4929',Attachment:'+'  ,showDate: false},
  { date: 'Oct 11', To:{ name: 'Grace Harris', imageUrl: '../../assets/images/images.jpg' }, amount:'$800.62', Account: 'Ops / Payroll', 'Payment Method': 'Landon S. ••4929',Attachment:'+'  ,showDate: false},
];

exportData(): void {
  this.exportService.exportToCsv(this.dataToExport, 'exported_data.csv');
}

hoveredColumn: string | null = null;
showDate: boolean = false;
displayedColumns: string[] = ['date', 'To', 'amount', 'Account', 'Payment Method','Attachment'];
dataSource = new MatTableDataSource<any>(this.dataToExport);
hoveredRow: any = null;
@ViewChild(MatSort, { static: true }) sort!: MatSort;
ngAfterViewInit() {
  this.dataSource.sort = this.sort;
}
onMouseOver(row: any): void {
  row.isHovered = true;
}
onMouseLeave(row: any): void {
  row.isHovered = false;
}
isShowDate(row: any): boolean {
  return row === this.dataSource.data[0] || row.isHovered;
}
// ADD FILTER

// FILTER KEYWORD DATA
selected: any;
selectedList: any = [];
@ViewChild("shoes") shoes: any = [];
typesOfShoes: any[] = ["John Doe", "James Johnson", "Emily Davis", "Robert Brown", "Olivia White","Michael Taylor","Sophia Miller","William Anderson","Ava Robinson","Benjamin Wilson","Grace Harris"];
shoesSet = new Map();
filteredOptions:any[] =  ["John Doe", "James Johnson", "Emily Davis", "Robert Brown", "Olivia White","Michael Taylor","Sophia Miller","William Anderson","Ava Robinson","Benjamin Wilson","Grace Harris"] ;
//keyword filter
keyWordsArray : any[] = []
searchTerm: string = '';
onSearch() {
  this.filteredOptions = this.typesOfShoes.filter(item =>{
    if(item.toLowerCase().includes(this.searchTerm.toLowerCase())){
      return true
    }else if(this.searchTerm===''){
      return true
    } else{
      return false
    }
  }
  )
  console.log(this.filteredOptions)
  // this.dataSource = new MatTableDataSource<any>(this.filteredOptions);
}
selectionChange($event: any) {
  console.log($event)
  console.log($event.options[0]._selected)
  console.log($event.options[0]._value)
  if($event.options[0]._selected){
    this.keyWordsArray.push($event.options[0]._value)
  }else if($event.options[0]._selected===false){
    if(this.keyWordsArray.includes($event.options[0]._value)){
      let index=this.keyWordsArray.indexOf($event.options[0]._value)
      this.keyWordsArray.splice(index,1)
    }
  }
  console.log("this.keyWordsArray",this.keyWordsArray)

  let filterdata = this.dataToExport.filter(data=>{
    if(this.keyWordsArray.includes(data.To.name)){
      return true
    } else if(this.keyWordsArray.length===0){
      return true
    } else
      return false
  })

  console.log("filtereddata",filterdata)

  // this.shoesSet.set(
  //   $event.option.value,
  //   !this.shoesSet.get($event.option.value)
  // );
  this.dataSource = new MatTableDataSource<any>(filterdata);
  console.log("this.shoesSet",this.shoesSet)

}
// FILTER KEYWORD DATA END


//FILTER GL CODE
selectedg: any;
selectedListg: any = [];
@ViewChild("glcodes") glcodes: any = [];
typesOfGl: any[] = [
                "120 - Accounts Receivable",
                "620 - Entertainment",
                "664 - Utilities",
                "668 - Wages and Salaries",
              ];
glSet = new Map();
filteredGl: any[] = [];
searchGl: string = '';
ngOnInit() {
  this.filteredGl = this.typesOfGl.slice();
}
onSearchGl() {
  this.filteredGl = this.typesOfGl.filter(item =>
    item.toLowerCase().includes(this.searchGl.toLowerCase())
  );
}

selectionChangeGl($event: any) {
  this.glSet.set(
    $event.option.value,
    !this.glSet.get($event.option.value)
  );
}

allOptionsSelected: boolean = false;//GL selectAll
selectAll() {
  this.allOptionsSelected = !this.allOptionsSelected;
  this.glSet.clear();
  this.typesOfGl.forEach(glcode => {
    this.glSet.set(glcode, this.allOptionsSelected);
  });
  this.selectedg = this.allOptionsSelected ? Array.from(this.glSet.keys()) : [];
  this.selectionChangeGl({ option: { value: undefined } });
}
//FILTER GL CODE

/*****Cards Filter*****/
searchCard: string = '';
cards: any[] = [
  {
    label: 'Your Cards',
    items: [
      'Jane B. ••1234',
      'Jane B. ••1231',
      'Jane B. ••1233',
      'Jane B. ••1222'
    ]
  },
  {
    label: 'Others Cards',
    items: [
      'Aluna T. ••0330',
      'Jessica A. ••9914',
      'Landon S. ••4929',
      'Aluna T. ••0330'
    ]
  },
  {
    label: 'Cancelled Cards',
    items: [
      'Landon S. ••4929',
      'Aluna T. ••0330',
      'Landon S. ••4929',
      'Aluna T. ••0330'
    ]
  }
];
filteredCards: any[] = [];

onSearchCardChange(): void {
  this.filteredCards = this.cards.filter(section =>
    section.label.toLowerCase().includes(this.searchCard.toLowerCase()) ||
    section.items.some((item: string) => item.toLowerCase().includes(this.searchCard.toLowerCase()))
  );
}

 /**** Option values array for Accounts*/
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
  console.log("changeTradesByCategory is run")
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
 /**** Option values array for Methods */

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
/**** Option values array for Methods END*/


}



