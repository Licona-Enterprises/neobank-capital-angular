import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {
  public Requests: Array <any> = [
    {created:"Oct 30" ,Contact:"Gusto", amount:"$12,213.22",status:"Active",account:"Ops / Payroll" },
    {created:"Nov 30" ,Contact:"Trinet", amount:"$13,213.22",status:"Active",account:"Ops / Payroll" },
    {created:"Feb 30" ,Contact:"Gusto", amount:"$14,213.22",status:"Active",account:"Ops / Payroll" },
    {created:"Oct 30" ,Contact:"Trinet", amount:"$15,213.22",status:"Active",account:"Ops / Payroll" },
  ]
}
