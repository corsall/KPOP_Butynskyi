import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [FormsModule, IonicStorageModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit form successfully when valid', async () => {
    spyOn(component, 'saveFormData').and.stub();
    spyOn(component, 'printSavedData').and.stub();

    component.formData = {
      name: 'Test',
      city: 'City',
      address: 'Address',
      postalCode: '12345',
      phone: '+380672662044',
      email: 'test@example.com',
      additionalInfo: 'Additional info',
      password: 'password',
      confirmPassword: 'password',
      receiveNews: true
    };
    await component.onSubmit();

    expect(component.formError).toBe('');
    expect(component.saveFormData).toHaveBeenCalled();
    expect(component.printSavedData).toHaveBeenCalled();
  });

  it('should set formError when password is not provided', () => {
    component.formData.password = '';
    expect(component.isFormValid()).toBe(false);
    expect(component.formError).toBe('Please enter a password.');
  });

  it('should set formError when passwords do not match', () => {
    component.formData.password = 'password';
    component.formData.confirmPassword = 'different_password';
    expect(component.isFormValid()).toBe(false);
    expect(component.formError).toBe('Passwords do not match.');
  });

  it('should set formError when form is not valid', async () => {
    spyOn(component, 'saveFormData').and.stub();
    spyOn(component, 'printSavedData').and.stub();

    // Set the form in an invalid state
    component.formData = {
      name: '',
      city: 'City',
      address: 'Address',
      postalCode: '12345',
      phone: 'invalid_phone',
      email: 'invalid_email',
      additionalInfo: 'Additional info',
      password: 'password',
      confirmPassword: 'different_password',
      receiveNews: true
    };

    await component.onSubmit();

    expect(component.formError).not.toBe('');
    expect(component.saveFormData).not.toHaveBeenCalled();
    expect(component.printSavedData).not.toHaveBeenCalled();
  });

  it('should set formError when phone  is not valid', async () => {
    spyOn(component, 'saveFormData').and.stub();
    spyOn(component, 'printSavedData').and.stub();

    // Set the form in an invalid state
    component.formData = {
      name: 'Bob',
      city: 'City',
      address: 'Address',
      postalCode: '12345',
      phone: 'invalid_phone',
      email: 'invalid_email@gmail.com',
      additionalInfo: 'Additional info',
      password: 'password',
      confirmPassword: 'password',
      receiveNews: true
    };

    await component.onSubmit();

    expect(component.formError).toBe('Please enter a valid phone number.');
    expect(component.saveFormData).not.toHaveBeenCalled();
    expect(component.printSavedData).not.toHaveBeenCalled();
  });

  it('should set formError when phone  is not valid', async () => {
    spyOn(component, 'saveFormData').and.stub();
    spyOn(component, 'printSavedData').and.stub();

    // Set the form in an invalid state
    component.formData = {
      name: 'Bob',
      city: 'City',
      address: 'Address',
      postalCode: '1',
      phone: 'invalid_phone',
      email: 'invalid_email@gmail.com',
      additionalInfo: 'Additional info',
      password: 'password',
      confirmPassword: 'password',
      receiveNews: true
    };

    await component.onSubmit();

    expect(component.formError).toBe('Please enter a valid phone number.');
    expect(component.saveFormData).not.toHaveBeenCalled();
    expect(component.printSavedData).not.toHaveBeenCalled();
  });

  it('should set formError when phone  is not valid', async () => {
    spyOn(component, 'saveFormData').and.stub();
    spyOn(component, 'printSavedData').and.stub();

    // Set the form in an invalid state
    component.formData = {
      name: 'Bob',
      city: 'City',
      address: 'Address',
      postalCode: 'bob',
      phone: 'invalid_phone',
      email: 'invalid_email@gmail.com',
      additionalInfo: 'Additional info',
      password: 'password',
      confirmPassword: 'password',
      receiveNews: true
    };

    await component.onSubmit();

    expect(component.formError).toBe('Please enter a valid phone number.');
    expect(component.saveFormData).not.toHaveBeenCalled();
    expect(component.printSavedData).not.toHaveBeenCalled();
  });

  it('should set formError when phone  is not valid', async () => {
    spyOn(component, 'saveFormData').and.stub();
    spyOn(component, 'printSavedData').and.stub();

    // Set the form in an invalid state
    component.formData = {
      name: 'Bob',
      city: 'City',
      address: 'Address',
      postalCode: '230000000000000000000000',
      phone: 'invalid_phone',
      email: 'invalid_email@gmail.com',
      additionalInfo: 'Additional info',
      password: 'password',
      confirmPassword: 'password',
      receiveNews: true
    };

    await component.onSubmit();

    expect(component.formError).toBe('Please enter a valid phone number.');
    expect(component.saveFormData).not.toHaveBeenCalled();
    expect(component.printSavedData).not.toHaveBeenCalled();
  });

  it('should set formError when email  is not valid', async () => {
    spyOn(component, 'saveFormData').and.stub();
    spyOn(component, 'printSavedData').and.stub();

    // Set the form in an invalid state
    component.formData = {
      name: 'Bob',
      city: 'City',
      address: 'Address',
      postalCode: '12345',
      phone: '+380672662044',
      email: 'invalid_emailgmail.com',
      additionalInfo: 'Additional info',
      password: 'password',
      confirmPassword: 'password',
      receiveNews: true
    };

    await component.onSubmit();

    expect(component.formError).toBe('Please enter a valid email address.');
    expect(component.saveFormData).not.toHaveBeenCalled();
    expect(component.printSavedData).not.toHaveBeenCalled();
  });

  it('should set formError when email  is not valid', async () => {
    spyOn(component, 'saveFormData').and.stub();
    spyOn(component, 'printSavedData').and.stub();

    // Set the form in an invalid state
    component.formData = {
      name: 'Bob',
      city: 'City',
      address: 'Address',
      postalCode: '12345',
      phone: '+380672662044',
      email: 'invalid_emailgmail.com',
      additionalInfo: 'Additional info',
      password: 'password',
      confirmPassword: 'password',
      receiveNews: true
    };

    await component.onSubmit();

    expect(component.formError).toBe('Please enter a valid email address.');
    expect(component.saveFormData).not.toHaveBeenCalled();
    expect(component.printSavedData).not.toHaveBeenCalled();
  });

  it('should set formError when email is not valid case: gmail.com', async () => {
    spyOn(component, 'saveFormData').and.stub();
    spyOn(component, 'printSavedData').and.stub();

    // Set the form in an invalid state
    component.formData = {
      name: 'Bob',
      city: 'City',
      address: 'Address',
      postalCode: '12345',
      phone: '+3806726620',
      email: 'gmail.com',
      additionalInfo: 'Additional info',
      password: 'password',
      confirmPassword: 'password',
      receiveNews: true
    };

    await component.onSubmit();

    expect(component.formError).toBe('Please enter a valid email address.');
    expect(component.saveFormData).not.toHaveBeenCalled();
    expect(component.printSavedData).not.toHaveBeenCalled();
  });

  it('should set formError when email  is not valid case: gmail.com@', async () => {
    spyOn(component, 'saveFormData').and.stub();
    spyOn(component, 'printSavedData').and.stub();

    // Set the form in an invalid state
    component.formData = {
      name: 'Bob',
      city: 'City',
      address: 'Address',
      postalCode: '12345',
      phone: '+3806726620',
      email: 'gmail.com@',
      additionalInfo: 'Additional info',
      password: 'password',
      confirmPassword: 'password',
      receiveNews: true
    };

    await component.onSubmit();

    expect(component.formError).toBe('Please enter a valid email address.');
    expect(component.saveFormData).not.toHaveBeenCalled();
    expect(component.printSavedData).not.toHaveBeenCalled();
  });

  it('should set formError when passwords do not match', async () => {
    spyOn(component, 'saveFormData').and.stub();
    spyOn(component, 'printSavedData').and.stub();

    // Set the form in an invalid state
    component.formData = {
      name: 'Bob',
      city: 'City',
      address: 'Address',
      postalCode: '12345',
      phone: '+3806726620',
      email: 'v@gmail.com',
      additionalInfo: 'Additional info',
      password: 'password1',
      confirmPassword: 'password',
      receiveNews: true
    };

    await component.onSubmit();

    expect(component.formError).toBe('Passwords do not match.');
    expect(component.saveFormData).not.toHaveBeenCalled();
    expect(component.printSavedData).not.toHaveBeenCalled();
  });

  it('should set formError when passwords do not match, case: vital2004 and v', async () => {
    spyOn(component, 'saveFormData').and.stub();
    spyOn(component, 'printSavedData').and.stub();

    // Set the form in an invalid state
    component.formData = {
      name: 'Bob',
      city: 'City',
      address: 'Address',
      postalCode: '12345',
      phone: '+3806726620',
      email: 'v@gmail.com',
      additionalInfo: 'Additional info',
      password: 'vital2004',
      confirmPassword: 'v',
      receiveNews: true
    };

    await component.onSubmit();

    expect(component.formError).toBe('Passwords do not match.');
    expect(component.saveFormData).not.toHaveBeenCalled();
    expect(component.printSavedData).not.toHaveBeenCalled();
  });

  it('should set formError when name is null', async () => {
    spyOn(component, 'saveFormData').and.stub();
    spyOn(component, 'printSavedData').and.stub();

    // Set the form in an invalid state
    component.formData = {
      name: '',
      city: 'City',
      address: 'Address',
      postalCode: '12345',
      phone: '+380672662044',
      email: 'v@gmail.com',
      additionalInfo: 'Additional info',
      password: 'vital2004',
      confirmPassword: 'vital2004',
      receiveNews: true
    };

    await component.onSubmit();

    expect(component.formError).toBe('Please enter your name.');
    expect(component.saveFormData).not.toHaveBeenCalled();
    expect(component.printSavedData).not.toHaveBeenCalled();
  });

  it('should set formError when address is null', async () => {
    spyOn(component, 'saveFormData').and.stub();
    spyOn(component, 'printSavedData').and.stub();

    // Set the form in an invalid state
    component.formData = {
      name: 'Bob',
      city: 'City',
      address: '',
      postalCode: '12345',
      phone: '+380672662044',
      email: 'v@gmail.com',
      additionalInfo: 'Additional info',
      password: 'vital2004',
      confirmPassword: 'vital2004',
      receiveNews: true
    };

    await component.onSubmit();

    expect(component.formError).toBe('Please enter your address.');
    expect(component.saveFormData).not.toHaveBeenCalled();
    expect(component.printSavedData).not.toHaveBeenCalled();
  });

  it('should set formError when city is null', async () => {
    spyOn(component, 'saveFormData').and.stub();
    spyOn(component, 'printSavedData').and.stub();

    // Set the form in an invalid state
    component.formData = {
      name: 'Bob',
      city: '',
      address: 'Address',
      postalCode: '12345',
      phone: '+380672662044',
      email: 'v@gmail.com',
      additionalInfo: 'Additional info',
      password: 'vital2004',
      confirmPassword: 'vital2004',
      receiveNews: true
    };

    await component.onSubmit();

    expect(component.formError).toBe('Please enter your city.');
    expect(component.saveFormData).not.toHaveBeenCalled();
    expect(component.printSavedData).not.toHaveBeenCalled();
  });

});
