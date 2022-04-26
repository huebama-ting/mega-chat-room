import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-control',
  templateUrl: './chat-control.component.html',
  styleUrls: ['./chat-control.component.scss']
})
export class ChatControlComponent {
  chatForm = new FormGroup({
    message: new FormControl('', Validators.required)
  })

  constructor() { }

  get message() {
    return this.chatForm.get('message')!;
  }
}
