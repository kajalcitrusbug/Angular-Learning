import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users: any = [];
  constructor(private userData: UserDataService) {
    console.log('userData', userData.users());
    this.users = userData.users();
  }
}
