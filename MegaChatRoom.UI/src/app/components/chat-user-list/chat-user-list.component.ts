import {
  Component,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import dayjs from 'dayjs';

import { ChatMessageDirective } from 'src/app/directives/chat-message/chat-message.directive';
import { SignalRService } from 'src/app/services/signal-r/signal-r.service';
import { ChatMessageUser } from 'src/app/shared/models/chat/chat-message-user.model';
import { ChatUserComponent } from 'src/app/components/chat-user/chat-user.component';

@Component({
  selector: 'app-chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.scss']
})
export class ChatUserListComponent implements OnInit, OnDestroy {
  @ViewChild(ChatMessageDirective, { static: true })
  private chatUserContainer!: ChatMessageDirective;
  private componentList!: ComponentRef<ChatUserComponent>[];

  constructor(private signalRService: SignalRService) { }

  ngOnInit(): void {
    this.configureListeners(this.addUserToActiveList, this.removeUserFromList);
    this.signalRService.connectUser({
      username: localStorage.getItem('username') as string,
      message: 'a',
      timestamp: dayjs().toISOString()
    } as ChatMessageUser);
  }

  ngOnDestroy(): void {
    this.signalRService.disconnectUser({
      username: localStorage.getItem('username') as string,
      message: '',
      timestamp: dayjs().toISOString()
    });
  }

  configureListeners(handler1: (user: ChatMessageUser) => void, handler2: (user: ChatMessageUser) => void): void {
    this.signalRService.hubConnection.on('userConnected', handler1);
    this.signalRService.hubConnection.on('userDisconnected', handler2);
  }

  addUserToActiveList = (user: ChatMessageUser) => {
    this.createUserComponent(user);
  }

  createUserComponent(user: ChatMessageUser): void {
    const chatUser = this.chatUserContainer.viewContainerRef.createComponent<ChatUserComponent>(ChatUserComponent);
    chatUser.instance.chatUser = { user: user.username };

    this.componentList.push(chatUser);
  }

  removeUserFromList = (user: ChatMessageUser) => {
    this.removeUserComponent(user);
  }

  removeUserComponent(user: ChatMessageUser): void {
    const username = localStorage.getItem('username') as string;
    const componentToRemove = this.componentList.find((component) => component.instance.chatUser.user === username);

    componentToRemove?.destroy();
  }
}
