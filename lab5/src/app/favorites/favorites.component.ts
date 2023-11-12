import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styles: [],
})
export class FavoritesComponent {
  @Input() favoriteUsers: any[] = [];

  showDetails(user: any) {

    console.log('Details of user:', user);
  }
}
