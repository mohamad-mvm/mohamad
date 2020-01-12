import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateUrl } from '@shared/custom-validators';

@Component({
  selector: 'app-register-role',
  templateUrl: './register-role.component.html',
  styleUrls: ['./register-role.component.scss']
})
export class RegisterRoleComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    Title: new FormControl('', [Validators.maxLength(10), Validators.required]),
    Code: new FormControl(''),
    Description: new FormControl('', ValidateUrl),
    IsActive: new FormControl(true)
  });

  get f() {
    return this.formGroup.controls;
  }

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    console.log(this.formGroup.value);
  }
}
