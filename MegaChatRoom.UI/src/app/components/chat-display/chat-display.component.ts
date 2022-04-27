import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { ChatMessageComponent } from 'src/app/components/chat-message/chat-message.component';
import { ChatMessageDirective } from 'src/app/directives/chat-message/chat-message.directive';
import { SignalRService } from 'src/app/services/signal-r/signal-r.service';

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.scss']
})
export class ChatDisplayComponent implements OnInit {
  @ViewChild(ChatMessageDirective, { static: true }) chatContainer!: ChatMessageDirective;
  messageArea!: HTMLElement;

  constructor(private signalRService: SignalRService) { }

  ngOnInit(): void {
    this.signalRService.hubConnection.on('messageReceived', this.displayChat);
  }

  configureListeners(handler: (username: string, message: string) => void): void {
     this.signalRService.hubConnection.on('messageReceived', handler);
  }

  displayChat = (username: string, message: string) => {
    const chatMessage = this.chatContainer.viewContainerRef.createComponent<ChatMessageComponent>(ChatMessageComponent);
    chatMessage.instance.username = username;
    chatMessage.instance.message = message;
  }
}
