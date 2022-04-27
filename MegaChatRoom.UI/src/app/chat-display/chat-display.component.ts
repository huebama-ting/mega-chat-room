import { Component, OnInit } from '@angular/core';

import { SignalRService } from '../services/signal-r/signal-r.service';

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.scss']
})
export class ChatDisplayComponent implements OnInit {
  messageArea!: HTMLElement;

  constructor(private signalRService: SignalRService) { }

  ngOnInit(): void {
    this.configureListeners(this.displayChat);
  }

  configureListeners(handler: (username: string, message: string) => void) {
    this.signalRService.hubConnection.on('messageReceived', handler);
  }

  displayChat(username: string, message: string) {
    this.messageArea = document.getElementById('message-area')!;
    this.messageArea.innerText += `${username}: ${message}\n`;
  }
}
