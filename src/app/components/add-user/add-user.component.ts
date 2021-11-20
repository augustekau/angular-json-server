import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  public user: User = {
    name: '',
    email: '',
    photo: '',
  };

  @Output() newItemEvent = new EventEmitter();
  constructor(private _userService: UserService) {}

  ngOnInit(): void {}
  addUser(form: NgForm) {
    // console.log('form submit works');
    if (form.valid) {
      this._userService.createUser(this.user).subscribe((data: any) => {
        // alert('Task succesfully added!');
        // (this.user.name = ''), (this.user.email = ''), (this.user.photo = '');
        console.log(data);
        form.resetForm();
        this.newItemEvent.emit(data);
      });
    } else {
      // alert('Please check your form data');
    }
  }
}
