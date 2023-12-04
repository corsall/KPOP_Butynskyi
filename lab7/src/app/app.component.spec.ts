import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { IonicStorageModule } from '@ionic/storage-angular';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, ContactFormComponent],
    imports: [
      IonicStorageModule.forRoot(),
      FormsModule // Add FormsModule to imports
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'lab7'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('lab7');
  });
});
