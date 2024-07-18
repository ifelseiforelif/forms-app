import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-react-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './react-form.component.html',
  styleUrl: './react-form.component.css',
})
export class ReactFormComponent {
  loginForm: FormGroup;
  isCheck: boolean = false;
  changeStatus() {
    this.isCheck = !this.isCheck;
  }
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      check: ['', []],
    });
  }

  send() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
