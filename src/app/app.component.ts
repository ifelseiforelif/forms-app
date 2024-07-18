import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ReactFormComponent } from './components/react-form/react-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, ReactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app';
}
