import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-infoform',
  template: `
    <form [formGroup]="form">
      <input type="text" formControlName="number">
      <button (click)="submit()">Submit</button>
      <p *ngIf="form?.get('number')?.invalid && form?.get('number')?.touched">
        Account number is required
      </p>
    </form>
  `
})
export class InfoformComponent {
  form = new FormGroup({
  number: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)])
  });
  submit() {
    console.log(this.form.value);
}
}