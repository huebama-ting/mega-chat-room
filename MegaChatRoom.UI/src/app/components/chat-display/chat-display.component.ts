import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import { ChatMessageComponent } from 'src/app/components/chat-message/chat-message.component';
import { ChatMessageDirective } from 'src/app/directives/chat-message/chat-message.directive';
import { ScrollDirective } from 'src/app/directives/scroll/scroll.directive';
import { SignalRService } from 'src/app/services/signal-r/signal-r.service';
import { ChatMessageUser } from 'src/app/shared/models/chat/chat-message-user.model';

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

  configureListeners(handler: (chat: ChatMessageUser) => void): void {
     this.signalRService.hubConnection.on('messageReceived', handler);
  }

  displayChat = (chat: ChatMessageUser) => {
    this.createMessageComponent(chat);
    this.chatContainer.scrollToBottom();
  };

  createMessageComponent(chat: ChatMessageUser): void {
    const chatMessage = this.chatMessageContainer.viewContainerRef.createComponent<ChatMessageComponent>(ChatMessageComponent);
    chatMessage.instance.chatMessage.username = chat.username;
    chatMessage.instance.chatMessage.message = chat.message;
    chatMessage.instance.chatMessage.timestamp = chat.timestamp;
  }
}
