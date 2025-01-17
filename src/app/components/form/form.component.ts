import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})


export class FormComponent {
  password: string = '';
  email: string = '';
  send() {
    console.log(this.password, this.email);
  }
}
