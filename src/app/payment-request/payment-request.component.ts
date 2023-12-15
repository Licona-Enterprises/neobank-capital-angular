import { Component,ViewEncapsulation,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html',
  styleUrls: ['./payment-request.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaymentRequestComponent {

  myForm!: FormGroup;
  submitted = false;
  selectedFile: File | null = null; // Variable to store the selected file

  paymentTooptions = [
    { label: 'Charles Bonito', value: 'Charles Bonito' },
    { label: 'David Bowie', value: 'David Bowie' },
    { label: 'Ziggy Stardist', value: 'Ziggy Stardist' },
  ];
  nameOptions = [
    { label: 'Quebed Demo Inc.', value: 'Quebed Demo Inc.' },
    { label: 'Neo Capital Bank', value: 'Neo Capital Bank' },
    { label: 'Quebed Demo Inc', value: 'Quebed Demo Inc' },
    { label: 'Demo Quebed Inc', value: 'Demo Quebed Inc' },
  ];

  destinAccountOptions = [
    { label: 'Ops/ Payroll $2,023,267.12/Checking ••1038', value: 'Ops/ Payroll $2,023,267.12/Checking ••1038' },
    { label: 'AP/Payroll $5,3755,86.12/Checking ••1238', value: 'AP/Payroll $5,3755,86.12/Checking ••1238' },
    { label: 'Ops/ Payroll $2,023,267.12/Checking ••1915', value: 'Ops/ Payroll $2,023,267.12/Checking ••1915' },
    { label: 'Ops/ Payroll $2,023,267.12/Checking ••1915', value: 'Ops/ Payroll $2,023,267.12/Checking ••1915' },
  ];

  onFileSelected(event: any): void {
    const selectedFile = (event.target as HTMLInputElement).files?.[0];
    if (selectedFile) {
      console.log('Selected File:', selectedFile);
      // You can perform additional actions with the selected file
    }
  }

 // Set these variables based on your application logic
 isTab2Disabled(): boolean {
  return true; // Return true to disable, false to enable
}

isTab3Disabled(): boolean {
  return true; // Return true to disable, false to enable
}


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      contact: ['', Validators.required], // Update with your actual form controls
      amount: ['', Validators.required],
      dueDate: ['', Validators.required],
      company: ['', Validators.required],
      destinationAccount: ['', Validators.required],
      attachment: [null],
    });
  }


  onSubmit() {
    console.log('i am submitted form')
      // Handle form submission here, including file attachment
      const formData = new FormData();
      formData.append('contact', this.myForm.value.contact);
      formData.append('amount', this.myForm.value.amount);
      formData.append('dueDate', this.myForm.value.dueDate);
      formData.append('company', this.myForm.value.company);
      formData.append('destinationAccount', this.myForm.value.destinationAccount);

      if (this.selectedFile !== null && this.selectedFile !== undefined) {
        formData.append('attachment', this.selectedFile);
      }


    console.log('Form submitted:', formData);

    // Set the 'submitted' flag to true
    this.submitted = true;
  }
  onFileChange(event: any) {
    // Update selectedFile when the file input changes
    const file = (event.target as HTMLInputElement).files?.[0];
    this.selectedFile = file || null;
  }
}
