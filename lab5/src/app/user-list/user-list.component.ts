import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  selectedUser: any = null;

  @Output() userSelected = new EventEmitter<any>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data.results;
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

}
