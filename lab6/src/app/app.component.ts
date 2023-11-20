import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  template: `
    <app-user-list (userSelected)="onUserSelected($event)"></app-user-list>
    <app-favorites [favoriteUsers]="selectedUsers"></app-favorites>
  `,
  styleUrls: [],
})
export class AppComponent {
  selectedUsers: any[] = [];

  constructor(private storage: Storage) {}

  async ngOnInit(): Promise<void> {
    await this.storage.create();
    this.storage.get('favoriteUsers').then((data) => {
      this.selectedUsers = data || [];
    });
  }

  onUserSelected(user: any) {

    this.selectedUsers.push(user);
  }
}
