import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  formData: any = {
    name: '',
    city: '',
    address: '',
    postalCode: '',
    phone: '',
    email: '',
    additionalInfo: '',
    password: '',
    confirmPassword: '',
    receiveNews: false,
  };

  formError: string = '';

  constructor(private storage: Storage) {
    this.initStorage();
  }

  async initStorage() {
    try {
      await this.storage.create();
      this.loadData();
    } catch (error) {
      console.error('Error initializing storage:', error);
    }
  }

  async onSubmit(): Promise<void> {
    console.log('Submit button clicked');
    if (this.isFormValid()) {
      console.log('Form Data:', this.formData);
      await this.saveFormData();
      await this.printSavedData();
    } else {
      this.setformError();
    }
  }

  async saveFormData(): Promise<void> {
    console.log('Saving form data:', this.formData);
    await this.storage.set('formData', { ...this.formData });
  }

  async printSavedData(): Promise<void> {
    const savedFormData = await this.storage.get('formData');
    console.log('Saved Form Data:', savedFormData);
  }

  isFormValid(): boolean {
    this.formError = '';

    if (!this.formData.name.trim()) {
      this.formError = 'Please enter your name.';
    }

    if (!this.formData.city.trim()) {
      this.formError = 'Please enter your city.';
    }

    if (!this.formData.address.trim()) {
      this.formError = 'Please enter your address.';
    }

    if (!this.isValidPhone()) {
      this.formError = 'Please enter a valid phone number.';
    }

    if (!this.isValidEmail()) {
      this.formError = 'Please enter a valid email address.';
    }

    if (!this.formData.password.trim()) {
      this.formError = 'Please enter a password.';
    }

    if (this.formData.password !== this.formData.confirmPassword) {
      this.formError = 'Passwords do not match.';
    }

    return this.formError === '';
  }

  setformError(): void {
    if (this.formError === '') {
      this.formError = 'Please fill in all required fields before submitting.';
    }
  }

  async loadData(): Promise<void> {
    const savedFormData = await this.storage.get('formData');
    if (savedFormData) {
      this.formData = savedFormData;
      console.log('Loaded Form Data:', savedFormData);
    }
  }

  isValidPhone(): boolean {
    const phoneRegex = /^(\+\d{1,2}\s?)?(\d{10}|\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/;
    return phoneRegex.test(this.formData.phone.trim());
  }

  isValidEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.formData.email.trim());
  }
}
