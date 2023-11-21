import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-wiredrwdowns-recipient-details',
  templateUrl: './wiredrwdowns-recipient-details.component.html',
  styleUrls: ['./wiredrwdowns-recipient-details.component.scss']
})
export class WiredrwdownsRecipientDetailsComponent {
  floatLabelControl = new FormControl('auto' as FloatLabelType);

  constructor(private _formBuilder: FormBuilder) {}

  onProfileChange() {
    // Handle profile change logic here if needed
  }

  isPersonSelected() {
    return this.floatLabelControl.value === 'auto';
  }

  isBusinessSelected() {
    return this.floatLabelControl.value === 'always';
  }
}

export type FloatLabelType = 'auto' | 'always' | 'never';
