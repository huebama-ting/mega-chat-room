import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';

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
  arrowRight = faArrowRight;
  user = faUser;

  constructor(private router: Router) { }

  get username(): AbstractControl {
    return this.usernameForm.get('username') as AbstractControl;
  }

  get errorMessage(): string {
    let errorMessage = '';

    if (this.username.hasError('required')) {
      errorMessage = 'Username is required.';
    } else if (this.username.hasError('minlength')) {
      errorMessage = 'Username must be longer than 3 characters.';
    } else if (this.username.hasError('maxlength')) {
      errorMessage = 'Username must be shorter than 32 characters.';
    }

    return errorMessage;
  }

  setUsername(): void {
    if (this.usernameForm.valid) {
      localStorage.setItem('username', this.username.value);
      this.router.navigateByUrl('/chat-room');
    }
  }
}
