import { Component } from '@angular/core';
import { ChatMessageUser } from 'src/app/shared/models/chat/chat-message-user.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent {
  chatMessage: ChatMessageUser = {
    message: '',
    timestamp: '',
    username: ''
  };
  
  constructor() { }
}
