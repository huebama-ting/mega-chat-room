import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-chat-control',
  templateUrl: './chat-control.component.html',
  styleUrls: ['./chat-control.component.scss']
})
export class ChatControlComponent {
  chatForm = new FormGroup({
    message: new FormControl('', Validators.required)
  })

  constructor(private messageService: MessageService) { }

  get message() {
    return this.chatForm.get('message')!;
  }

  sendChat() {
    if (this.chatForm.valid) {
      this.messageService.sendMessage(this.message.value);
    }
  }
}
