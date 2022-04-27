import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  hubConnection: signalR.HubConnection;

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder().withUrl('http://localhost:5073/hub').build();

    this.hubConnection.start().catch((err) => console.log(err));
  }

  sendMessage(message: string): void {
    this.hubConnection.send('sendMessage', localStorage.getItem('username'), message);
  }
}
