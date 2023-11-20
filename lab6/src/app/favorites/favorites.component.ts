import { Component, Input } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent {
  @Input() favoriteUsers: any[] = [];

  constructor(private storage: Storage) {}

  showDetails(user: any) {

    console.log('Details of user:', user);
  }

  deleteUser(index: number) {
    this.favoriteUsers.splice(index, 1);

    this.storage.set('favoriteUsers', this.favoriteUsers);
  }
}
