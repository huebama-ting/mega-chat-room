import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';

import { ChatMessageComponent } from 'src/app/components/chat-message/chat-message.component';
import { ChatMessageDirective } from 'src/app/directives/chat-message/chat-message.directive';
import { ScrollDirective } from 'src/app/directives/scroll/scroll.directive';
import { SignalRService } from 'src/app/services/signal-r/signal-r.service';

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.scss']
})
export class ChatDisplayComponent implements OnInit {
  @ViewChild(ChatMessageDirective, { static: true }) chatMessageContainer!: ChatMessageDirective;
  @ViewChild(ScrollDirective, { static: true }) chatContainer!: ScrollDirective;

  constructor(private signalRService: SignalRService) { }

  ngOnInit(): void {
    this.configureListeners(this.displayChat);
  }

  configureListeners(handler: (username: string, message: string) => void): void {
     this.signalRService.hubConnection.on('messageReceived', handler);
  }

  displayChat = (username: string, message: string) => {
    this.createMessageComponent(username, message);
    this.chatContainer.scrollToBottom();
  }

  createMessageComponent(username: string, message: string): void {
    const chatMessage = this.chatMessageContainer.viewContainerRef.createComponent<ChatMessageComponent>(ChatMessageComponent);
    chatMessage.instance.username = username;
    chatMessage.instance.message = message;
  }
}
