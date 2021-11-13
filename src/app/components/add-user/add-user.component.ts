import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  public user: User = {
    name: '',
    email: '',
  };

  @Output() newItemEvent = new EventEmitter();
  constructor(private _userService: UserService) {}

  ngOnInit(): void {}
  addUser() {
    console.log('form submit works');
    this._userService.createUser(this.user).subscribe((data: any) => {
      // alert('Task succesfully added!');
      console.log(data);
      this.newItemEvent.emit(data);
    });
  }
}
