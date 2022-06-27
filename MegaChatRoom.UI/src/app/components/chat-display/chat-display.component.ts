import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import dayjs from 'dayjs';

import { ChatMessageComponent } from 'src/app/components/chat-message/chat-message.component';
import { ChatMessageDirective } from 'src/app/directives/chat-message/chat-message.directive';
import { ScrollDirective } from 'src/app/directives/scroll/scroll.directive';
import { MessageService } from 'src/app/services/message/message.service';
import { SignalRService } from 'src/app/services/signal-r/signal-r.service';
import { ChatMessageUser } from 'src/app/shared/models/chat/chat-message-user.model';

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.scss']
})
export class ChatDisplayComponent implements OnInit {
  @ViewChild(ChatMessageDirective, { static: true })
  private chatMessageContainer!: ChatMessageDirective;
  @ViewChild(ScrollDirective, { static: true })
  private chatContainer!: ScrollDirective;

  constructor(private signalRService: SignalRService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.configureListeners(this.displayChat);
    this.messageService.setLastMessageTimestamp(dayjs().toISOString());
    this.messageService.getMessages().subscribe((messages) => {
      for (const message of messages) {
        this.createMessageComponent(message);
      }

      this.sendJoinMessage();
      this.messageService.setLastMessageTimestamp(messages[0].timestamp);
    });
  }

  configureListeners(handler: (chat: ChatMessageUser) => void): void {
     this.signalRService.hubConnection.on('messageReceived', handler);
  }

  displayChat = (chat: ChatMessageUser) => {
    console.log(chat);
    this.createMessageComponent(chat);
    this.chatContainer.scrollToBottom();
  };

  createMessageComponent(chat: ChatMessageUser, index?: number): void {
    const chatMessage = this.chatMessageContainer.viewContainerRef.createComponent<ChatMessageComponent>(ChatMessageComponent, {
      index: index
    });
    chatMessage.instance.chatMessage.username = chat.username;
    chatMessage.instance.chatMessage.message = chat.message;
    chatMessage.instance.chatMessage.timestamp = chat.timestamp;
  }

  sendJoinMessage(): void {
    const username = localStorage.getItem('username') as string;
      const messageText = `${username} has joined the room!`;
      
      this.messageService.sendUserMessage(messageText, 'System');
  }

  loadMessages(): void {
    this.messageService.getMessages().subscribe((messages) => {
      messages = messages.reverse();
      for (const message of messages) {
        this.createMessageComponent(message, 0);
      }

      this.messageService.setLastMessageTimestamp(messages[0].timestamp);
    });
  }
}
