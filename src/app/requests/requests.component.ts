import { Component, ViewEncapsulation,ViewChild } from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent {
  hoveredColumn: string | null = null;
  showDate: boolean = false;
  displayedColumns: string[] = ['date', 'contact', 'amount', 'status','Account',];
  dataSource = new MatTableDataSource<any>([
    { 'date': 'Dec 15',contact:'Charles Bonito', amount: '$1,932.37',status:'Active', Account: 'Ops / Payroll', showDate: false },
    { 'date': 'Dec 16',contact:'Charles Bonito', amount: '$1,932.37',status:'Paid', Account: 'Ops / Payroll', showDate: false },
    { 'date': 'Dec 12',contact:'Charles Bonito', amount: '$1,932.37',status:'Overdue', Account: 'Ops / Payroll', showDate: false },
    { 'date': 'Dec 25',contact:'Charles Bonito', amount: '$1,932.37',status:'Expired', Account: 'Ops / Payroll', showDate: false },
  ]);

  getStatusColor(status: string): string {
    switch (status) {
      case 'Active':
        return 'accent';
      case 'Inactive':
        return 'warn';
      default:
        return 'primary'; // or any other default color
    }
  }


  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  hoveredRow: any = null;
  onMouseOver(row: any): void {
    row.isHovered = true;
  }

  onMouseLeave(row: any): void {
    row.isHovered = false;
  }

  isShowDate(row: any): boolean {
    return row === this.dataSource.data[0] || row.isHovered;
  }



}
