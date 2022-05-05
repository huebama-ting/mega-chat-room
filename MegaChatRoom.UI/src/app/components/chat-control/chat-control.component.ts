import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-chat-control',
  templateUrl: './chat-control.component.html',
  styleUrls: ['./chat-control.component.scss']
})
export class ChatControlComponent {
  chatForm = new FormGroup({
    message: new FormControl('', Validators.required)
  });

  constructor(private messageService: MessageService) { }

  get message(): AbstractControl {
    return this.chatForm.get('message') as AbstractControl;
  }

  sendChat(): void {
    if (this.chatForm.valid) {
      this.messageService.sendUserMessage(this.message.value);
      this.chatForm.reset();
    }
  }
}
