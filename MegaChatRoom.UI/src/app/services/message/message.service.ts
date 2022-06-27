import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import dayjs from 'dayjs';
import { Observable } from 'rxjs';

import { SignalRService } from 'src/app/services/signal-r/signal-r.service';
import { ChatMessageUser } from 'src/app/shared/models/chat/chat-message-user.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private lastMessageTimestamp!: string;

  constructor(private http: HttpClient, private signalRService: SignalRService) { }

  setLastMessageTimestamp(value: string): void {
    this.lastMessageTimestamp = value;
  }

  buildMessage(messageContent: string, username?: string): ChatMessageUser {
    return {
      username: username ?? localStorage.getItem('username') as string,
      message: messageContent,
      timestamp: dayjs().toISOString()
    };
  }

  sendUserMessage(messageContent: string, username?: string): void {
    this.signalRService.sendMessage(this.buildMessage(messageContent, username));
  }

  getMessages(): Observable<ChatMessageUser[]> {
    return this.http.get<ChatMessageUser[]>('https://localhost:7073/api/v1/messages', {
      params: {
        timestamp: this.lastMessageTimestamp
      }
    });
  } 
}
