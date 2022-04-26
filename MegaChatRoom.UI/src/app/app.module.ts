import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernameEntryComponent } from './username-entry/username-entry.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatDisplayComponent } from './chat-display/chat-display.component';
import { ChatControlComponent } from './chat-control/chat-control.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernameEntryComponent,
    ChatRoomComponent,
    ChatDisplayComponent,
    ChatControlComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
