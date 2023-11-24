import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-paysomeone-user-details',
  templateUrl: './paysomeone-user-details.component.html',
  styleUrls: ['./paysomeone-user-details.component.scss']
})
export class PaysomeoneUserDetailsComponent {
  selectedOption = new FormControl(null);
}
