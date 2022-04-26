import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-username-entry',
  templateUrl: './username-entry.component.html',
  styleUrls: ['./username-entry.component.scss']
})
export class UsernameEntryComponent {
  usernameForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(32)
    ])
  });

  constructor() { }

  get username() {
    return this.usernameForm.get('username')!;
  }

  setUsername(): void {
    if (this.usernameForm.valid) {
      localStorage.setItem('username', this.username.value);
    }
  }
}
