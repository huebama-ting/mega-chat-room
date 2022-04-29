import { Injectable } from '@angular/core';
import moment from 'moment';

import { SignalRService } from 'src/app/services/signal-r/signal-r.service';
import { ChatMessageUser } from 'src/app/shared/models/chat/chat-message-user.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private signalRService: SignalRService) { }

  buildMessage(messageContent: string, username?: string): ChatMessageUser {
    return {
      username: username ?? localStorage.getItem('username') as string,
      message: messageContent,
      timestamp: moment().format('yy/MM/DD, HH:mm')
    };
  }

  sendUserMessage(messageContent: string, username?: string): void {
    this.signalRService.sendMessage(this.buildMessage(messageContent, username));
  }
}
