import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  selectedUser: any = null;
  favoriteUsers: any[] = [];

  @Output() userSelected = new EventEmitter<any>();

  constructor(
    private userService: UserService,
    private storage: Storage
  ) {}

  async ngOnInit(): Promise<void> {
    await this.storage.create();
    this.userService.getUsers().subscribe((data) => {
      this.users = data.results;
    });

    this.storage.get('favoriteUsers').then((data) => {
      this.favoriteUsers = data || [];
    });
  }

  showDetails(user: any) {
    this.selectedUser = user;
  }

  closePopup() {
    this.selectedUser = null;
  }

  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
  }

  addToFavorites(user: any) {
    this.favoriteUsers.push(user);
    this.storage.set('favoriteUsers', this.favoriteUsers);
  }

}
