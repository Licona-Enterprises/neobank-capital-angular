import { Component } from '@angular/core';

@Component({
  selector: 'app-wire-drawdowns',
  templateUrl: './wire-drawdowns.component.html',
  styleUrls: ['./wire-drawdowns.component.scss']
})
export class WireDrawdownsComponent {

  public wiredrawdown: Array <any> = [
    {created:"Oct 30" ,reciepient:"Gusto", limit:"$12,213.22",payfrom:"Ops / Payroll" },
    {created:"Nov 30" ,reciepient:"Trinet", limit:"$13,213.22",payfrom:"Ops / Payroll" },
    {created:"Feb 30" ,reciepient:"Gusto", limit:"$14,213.22",payfrom:"Ops / Payroll" },
    {created:"Oct 30" ,reciepient:"Trinet", limit:"$15,213.22",payfrom:"Ops / Payroll" },
  ]

}
