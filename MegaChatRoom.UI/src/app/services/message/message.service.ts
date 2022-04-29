import { Injectable } from '@angular/core';
import moment from 'moment';

import { SignalRService } from 'src/app/services/signal-r/signal-r.service';
import { ChatMessageUser } from 'src/app/shared/models/chat/chat-message-user.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private signalRService: SignalRService) { }

  sendMessage(messageContent: string): void {
    const message: ChatMessageUser = {
      username: localStorage.getItem('username') ?? 'System',
      message: messageContent,
      timestamp: moment().format('yy/MM/DD, HH:mm')
    };

    this.signalRService.sendMessage(message);
  }
}
