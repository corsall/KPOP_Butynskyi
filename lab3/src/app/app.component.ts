import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  imagePath : string = ''; 

  imageForm = this.formBuilder.group({
    path: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    this.imagePath = this.imageForm.value.path || '';
  }
}
