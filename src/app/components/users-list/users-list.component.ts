import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public users: User[] = [];

  constructor(private _userService: UserService) {
    this.getUsers();
  }
  // Gauname duomenis is task Service
  getUsers() {
    this._userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
    });
  }

  deleteUser(user: User) {
    console.log('Task Will be deleted:');
    console.log(user);
    this._userService.deleteUser(user).subscribe((data) => {
      console.log(data);
      // Po sekmingo istrynimo atnaujiname tasks duomenis
      this.getUsers();
    });
  }

  ngOnInit(): void {}
}
