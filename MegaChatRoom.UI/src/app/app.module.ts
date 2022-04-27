import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ChatControlComponent } from 'src/app/components/chat-control/chat-control.component';
import { ChatDisplayComponent } from 'src/app/components/chat-display/chat-display.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatMessageDirective } from 'src/app/directives/chat-message/chat-message.directive';
import { ChatRoomComponent } from 'src/app/components/chat-room/chat-room.component';
import { UsernameEntryComponent } from 'src/app/components/username-entry/username-entry.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatControlComponent,
    ChatDisplayComponent,
    ChatMessageComponent,
    ChatMessageDirective,
    ChatRoomComponent,
    UsernameEntryComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
