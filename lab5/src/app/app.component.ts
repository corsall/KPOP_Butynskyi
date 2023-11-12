import { Component } from '@angular/core';

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

  onUserSelected(user: any) {

    this.selectedUsers.push(user);
  }
}
