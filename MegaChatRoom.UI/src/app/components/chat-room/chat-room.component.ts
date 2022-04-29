import { AfterViewInit, Component, OnInit } from '@angular/core';

import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements AfterViewInit {
  constructor(private messageService: MessageService) { }

  ngAfterViewInit(): void {
    this.sendJoinMessage();
  }

  sendJoinMessage(): void {
    const username = localStorage.getItem('username') as string;
    const messageText = `${username} has joined the room!`;
    
    this.messageService.sendUserMessage(messageText, 'System');
  }
}
