import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

import { ChatMessageUser } from 'src/app/shared/models/chat/chat-message-user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  hubConnection: signalR.HubConnection;

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder().withUrl(environment.signalRHub).build();
  }

  startConnection(): () => Promise<void> {
    return () => {
      return this.hubConnection.start().catch((err) => console.log(err));
    };
  }

  sendMessage(message: ChatMessageUser): void {
    this.hubConnection.send('sendMessage', message);
  }

  connectUser(user: ChatMessageUser): void {
    console.log('what')
    this.hubConnection.send('connectUser', user);
  }

  disconnectUser(user: ChatMessageUser): void {
    this.hubConnection.send('disconnectUser', user);
  }
}
